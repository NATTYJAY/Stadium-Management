<div class="page-wrapper">
   <div class="container-fluid pt-25"> 
    <?php include"modal.php";?>
      <div class="row">
        <div class="col-xs-12">
          <div class="panel panel-info card-view">
            <div class="panel-heading">
              <div class="pull-left">
                <h6 class="panel-title txt-dark">This page display Security personnel for checking the users Identity before entering the stadium</h6>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-wrapper collapse in">
              <div class="panel-body">
                <p class="muted">Security Checkers  </p>
                <div class="table-responsive datatable-responsive">
                  <table id="column-render" class="table table-striped table-bordered nowrap">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                       <th></th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                     <?php echo $admin->display_checkers(); ?>
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