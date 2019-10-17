<div class="page-wrapper">
   <div class="container-fluid pt-25"> 
    <?php include"modal.php";?>
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-warning card-view">
            <div class="panel-heading">
              <div class="pull-left">
                <h6 class="panel-title txt-dark">This page display all the registered users in the system</h6>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-wrapper collapse in">
              <div class="panel-body">
                <p class="muted">Registered Users  </p>
                <div class="table-responsive datatable-responsive">
                  <table id="column-render" class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        
                        <th>First Name (Phone Number)</th>
                        <th>Last Name</th>
                       
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     <?php echo $admin->display_users(); ?>
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