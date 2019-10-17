<?php include"header.php";?>
 <style>
#customers,#edu {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th,#edu td, #edu th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #4CAF50;}

#customers tr:hover,#edu tr:hover {background-color: #ddd;}

#edu tr:nth-child(even){background-color: #f2f2f2;}

#edu th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #006699;
    color: white;
}

#boxer{
  border:10px !important;
box-shadow: 0px 8px 16px 0px rgba(10,10,10,0.2) !important;
}
</style>
    <div class="container breadcrub">
        <div class="clearfix"></div>
    </div>  
    <!-- CONTENT -->
    <div class="container">
<div class="row">
                        <div class="col-md-4"></div>
                        <div class="col-md-4">
                             <button class="caps center margtop20" disabled="disabled"><h4>View and Print Your ticket here</h4></button>
                        </div>

                        <div class="col-md-4"></div>
                    </div><br>
        
        <div class="container mt25 offset-0">
            
            
            <!-- CONTENT -->
         <div class="col-md-12 pagecontainer2 offset-0">
                
                <table id="edu">
                                                  <tr>
                                                    <th>Slip No</th>
                                                    <th>Date Booked</th>
                                                    <th>Matched</th>
                                                    <th>Reference Number</th>
                                                     <th>Amount Paid</th>
                                                    <th>Ticket Type</th>
                                                    <th>Action</th>
                                                  </tr>
                                                  <?php echo $booking->display_print_layout(); ?>
                                            </table>
               
                
            <div class="clearfix"></div><br/>
            
            </div>
            
        </div>
        
        
    </div>
    <!-- END OF CONTENT -->
    

<?php include"footer.php";?>


