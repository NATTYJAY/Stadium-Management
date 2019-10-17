
<div class="page-wrapper">
    <div class="container-fluid pt-25"> 
      <!-- Row -->
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div class="panel panel-default card-view pa-0">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-6 pl-20 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="counter-anim"><?php echo $admin->count_match();?></span></span> <span class="weight-500 uppercase-font block">TOTAL MATCH ADDED</span> </div>
                      <div class="col-xs-6 text-center  pl-0 pr-0 pt-30 data-wrap-right">
                        <div id="sparkline_3" class="sparkline-w-100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
          <div class="panel panel-default card-view pa-0">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-6 pl-20 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="counter-anim"><?php echo $admin->chckers();?></span></span> <span class="weight-500 uppercase-font block">CHECKERS PERSONNEL </span> </div>
                      <div class="col-xs-6 text-center  pl-0 pr-0  pt-30 data-wrap-right">
                        <div id="sparkline_4" class="sparkline-w-100-h-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <div class="panel panel-default card-view pa-0">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-6 pl-20 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="counter-anim"><?php echo $admin->count_users();?></span></span> <span class="weight-500 uppercase-font block">REGISTERED USERS </span> </div> 
                      <div class="col-xs-6 text-center  pl-0 pr-0 pt-20 data-wrap-right">
                        <div id="e_chart_1" class="h-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6">
          <div class="panel panel-default card-view pa-0">
            <div class="panel-wrapper collapse in">
              <div class="panel-body pa-0">
                <div class="sm-data-box">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-xs-6 pl-20 pr-0 data-wrap-left"> <span class="txt-dark block counter"><span class="counter-anim"><?php echo $admin->count_cat();?></span></span> <span class="weight-500 uppercase-font block">CATEGORIES </span> </div> 
                      <div class="col-xs-6 text-center  pl-0 pr-0 pt-20 data-wrap-right">
                        <div id="e_chart_1" class="h-50"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    <!-- /Row --> 
    <!-- Row-->
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="panel panel-default card-view  pa-0">
        <div class="panel-wrapper collapse in">
          <div class="panel-body  pa-0">
            <div class="profile-box">
              <div class="profile-cover-pic">
                <div class="fileupload btn btn-default"> <span class="btn-text"><i class="typcn typcn-pencil"></i></span>
                  <input class="upload" type="file">
                </div>
                <div class="profile-image-overlay"></div>
              </div>
              <div class="profile-info text-center">
                <div class="profile-img-wrap"> <img class="inline-block mb-10" src="<?php echo $direction; ?>plugins/assets/img/users/img-user.jpg" alt="user"/>
                  <div class="fileupload btn btn-default"> <span class="btn-text"><i class="typcn typcn-pencil"></i></span>
                    <input class="upload" type="file">
                  </div>
                </div>
                <h5 class="block mt-5 mb-5 weight-500 capitalize-font txt-primary">Administrator</h5>
                <h6 class="block capitalize-font pb-10">Manager AKS Stadium</h6>
              </div>
              <div class="social-info">
             
                	<div class="alert alert-warning" role= "alert"><p>Your sole aim is for you to manage the entire system.Enroll in traning <code>here</code></p></div>
            
                 <?php include"modal.php";?>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
     <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="row ad-row--full-height">
        <div class="col-lg-6 col-xs-6">
        	<a href="#" data-toggle="modal" data-target="#myModal1">
          <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-success ">
            <div class="ad-portlet__body">
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> Add Match </div>
                 <canvas height="64" width="64" class="snow" style="margin:0px 0px 0px 40px"></canvas>
                  
              </div>
            </div>
          </div>
      </a>
          <div class="ad--space-30"></div>
             <a href="#" data-toggle="modal" data-target="#search">
           <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-success ">
            <div class="ad-portlet__body">
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> Check Bookings </div>
                 <canvas height="64" width="64" class="clear-day" style="margin:0px 0px 0px 40px"></canvas>
              </div>
            </div>
          </div>
        </a>
      
        </div>
        <div class="col-lg-6  col-xs-6">
          <a href="#" data-toggle="modal" data-target="#checkers">
          <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-danger ">
            <div class="ad-portlet__body">
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> Add Checkers  </div>
                <div id="sparkline_1_2"  class="spakline-o-hidden"></div>
              </div>
            </div>
          </div>
        </a>
          <div class="ad--space-30"></div>
           <a href="#" data-toggle="modal" data-target="#catmodal">
          <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-accent ">
            <div class="ad-portlet__body">
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> Add Category</div>
               <div id="sparkline_1_1" class="spakline-o-hidden" ></div>
              </div>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="row ad-row--full-height">
        <div class="col-lg-6 col-xs-6">
            <a href="#" data-toggle="modal" data-target="#adminmodal">
          <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-success ">
            <div class="ad-portlet__body"> 
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> Create Priviledge  </div>
               <canvas height="64" width="64" style="margin:0px 0px 0px 40px"class="cloudy"></canvas>
              </div>
            </div>
          </div>
        </a>
          <div class="ad--space-30"></div>
          <a href="checkers">
          <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-brand ">
            <div class="ad-portlet__body">
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> View/Delete Checkers </div>
                <canvas height="64" width="64" class="wind" style="margin:0px 0px 0px 40px"></canvas>
              </div>
            </div>
          </div>
        </a>
        </div>  
        <div class="col-lg-6  col-xs-6">
          <a href="usersbooking">
          <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-danger ">
            <div class="ad-portlet__body">
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> Update Match Details </div>
                <canvas height="64" width="64" class="wind" style="margin:0px 0px 0px 40px"></canvas>
              </div>
            </div>
          </div>
           </a>
          <div class="ad--space-30"></div> 
          <a href="category">
          <div class="ad-portlet card-view ad-portlet--half-height ad-portlet--border-bottom-accent ">
            <div class="ad-portlet__body">
              <div class="ad-widget-1">
                <div class="ad-widget-1__number"> Update Category </div>
                <div id="sparkline_1_3"  class="spakline-o-hidden"></div>
              </div>
            </div>
          </div>
        </a>
        </div>
      </div>
    </div>
   <?php $admin->sess(); ?>
    <div class="clearfix"></div>
    <!-- Row --> 
    <!-- Row-->
   
    <!-- Row--> 
    <!-- Footer -->
    <footer class="footer container-fluid pt-10 pb-10  pl-30 pr-30">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="pull-left text-dark pt-5 small">Copyright @ 2018  Hyrax UX  Panel. All Rights Reserved</div>
          <div class="pull-right">Created with by <img src="<?php echo $direction; ?>plugins/assets/img/heartbeat.svg" alt="srgit" class="heart"> <a href="http://www.srgit.com/" target="_blank">SRGIT</a></div>
          <div class="clearfix"></div>
        </div>
      </div>
    </footer>
    <!-- /Footer --> 
  </div>
</div>