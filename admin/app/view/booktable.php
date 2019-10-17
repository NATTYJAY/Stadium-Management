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
                        <th>Match</th>
                        <th>stat time</th>
                       <th></th>
                        <th>Match Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody> 
                     <?php echo $admin->display_last_stadium(); ?>
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