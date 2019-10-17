<?php
namespace admin\app\models;
 use admin\app\models\database;
class queryclass{

	private $selectables = array();
	private $table;
	private $whereClause = false;
	private $limit;
	public $dbh;
	private $result = array();
	private $thingsarray = array();



	function __construct(){
	$this->dbh = database::getInstance()->getConnection(); 
    database::startmysession(0, '/', $_SERVER['SERVER_NAME'], false, true);
     session_start();
    }

public function execute($query){
		$this->answer = $this->dbh->query($query);
		return $this->answer;
}
public function rowsnumber(){
	$num_rows = $this->answer->num_rows;
	if ($num_rows >=1) {
		return true;
	}else{
		return false;
	}
}
public function select($table, $rows = '*', $where = null, $order = null,$limit = null){
        $q = 'SELECT '.$rows.' FROM '.$table;
        if($where != null)
            $q .= ' WHERE '.$where;
        if($order != null)
            $q .= ' ORDER BY '.$order;
          if($limit != null)
            $q .= ' LIMIT '.$limit;
        if($q){
            return $q; 
        }
        else{
            return false; 
        }
    }

    public function insert($table,array $rows){
            $insert = 'INSERT INTO '.$table.' SET ';
            $keys = array_keys($rows); 
            for($i = 0; $i < count($rows); $i++){
                if(is_string($rows[$keys[$i]])){
                    $insert .= $keys[$i].'="'.$rows[$keys[$i]].'"';
                }
                else{
                    $insert .= $keys[$i].'='.$rows[$keys[$i]];
                }
                if($i != count($rows)-1){
                    $insert .= ','; 
                }
            }
            $query = $this->execute($insert);
            if($query){
                return true; 
            }else{
                return false; 
            }
    }

    public function delete($table, $where = null){
        $qr = 'DELETE FROM '.$table;
        if($where != null)
            $qr .= ' WHERE '.$where;
         $query = $this->execute($qr);
            if($query){
                return true; 
            }else{
                return false; 
            }
    }

         public function update($table,$params=array(),$where){
            foreach($params as $field=>$value){
                $args[]=$field.'="'.$value.'"';
            }
            $sql='UPDATE '.$table.' SET '.implode(',',$args).' WHERE '.$where;
            $this->myQuery = $sql; // Pass back the SQL
            if($query = $this->execute($this->myQuery)){
                array_push($this->result,$query->affected_rows);
                return true; // Update has been successful
            }else{
                array_push($this->result,mysqli_error());
                return false; // Update has not been successful
            }
       
    }

public function fetchrows($details){
	$fetch[$details] = $this->answer->fetch_array();
		return $fetch[$details];
}

public function clean($data) {
        $data = stripslashes($data);
        $data = htmlentities( $data, ENT_QUOTES, 'utf-8' );
        $data = strip_tags($data);
        $data = mysqli_real_escape_string($this->dbh, $data);

        return $data;
  }

public function begintransact(){
	 $this->dbh->begin_transaction();
}

public function begincommit(){
	 $this->dbh->commit();
}

public function beginrollback(){
	 $this->dbh->rollback();
}

public function autocommit(){
	 $this->dbh->autocommit(false);
}

public function lastid(){
	return $this->dbh->insert_id;
}

}

?>