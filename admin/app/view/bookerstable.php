<?php  

      if($_SERVER['REQUEST_METHOD']== "GET"){
          $leave = explode("/", $_SERVER["REQUEST_URI"]);
          unset($leave[0]);
          $id = $leave[3];
      }
       ?>

<div class="page-wrapper">
   <div class="container-fluid pt-25"> 
    <?php include"modal.php";?>
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-default card-view">
            <div class="panel-heading">
              <div class="pull-left">
                <h6 class="panel-title txt-dark">Current match Details</h6>
              </div>
              <div class="pull-right">
                <h6 class="panel-title txt-dark"><b><?php echo($admin->all_slip($id)->count);?></b>  Users Registered for <b style="color:green;"><?php echo($admin->all_slip($id)->match);?></b></h6>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-wrapper collapse in">
              <div class="panel-body">
                <p class="muted">This section display the details of the current match.</p>
                <div class="table-responsive datatable-responsive">
                  <table id="column-render" class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th><b>NAME</b></th>
                        <th>MATCH TYPE</th>
                       <th></th>
                        <th>CATEGORY</th>
                        <th>PHONE</th>
                        <th>AMOUNT PAID</th>
                        <th>DATE BOOKED</th>
                        <th>REF ID</th>
                       
                      </tr>
                    </thead>
                    <tbody>
                   <?php echo $admin->display_booked($id); ?>
                    </tbody>
                    
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /Row --> 
   
    </div>
    <!-- Footer -->
     <?php echo  include"footer.php";?>
    <!-- /Footer --> 
  </div>
  <!-- /Main Content --> 
</div>