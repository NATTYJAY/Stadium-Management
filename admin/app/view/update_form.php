<script src="<?php echo $direction; ?>plugins/vendors/bower_components/jquery/dist/jquery.min.js"></script> 
<div class="page-wrapper">
   <div class="container-fluid pt-25"> 
 <div class="row">
        <div class="col-sm-6">
          <div class="panel panel-default card-view">
            <div class="panel-heading">
              <div class="pull-left">
                <h6 class="panel-title txt-dark">Edit/Update Match Information Here</h6>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-wrapper collapse in">
              <div class="panel-body">
                <div class="form-wrap">
                  <div class="mb-20">
                    <div class="form-group mb-20">
                      <label class="col-sm-4 col-lg-2 col-form-label">Match Date</label>
                      <div class="col-sm-8 col-lg-10">
                         <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-account"></i></div>
                                           <input type="text" class="form-control mydatepicker" placeholder="mm/dd/yyyy" name="" >
                      <span class="input-group-addon"><i class="fa fa-calendar"></i></span> 
                                            </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="form-group mb-20">
                      <label class="col-sm-4 col-lg-2 col-form-label">Match Time</label>
                      <div class="col-sm-8 col-lg-10">
                         <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" id="timepicker" placeholder="Check time" name="">
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="form-group mb-20">
                      <label class="col-sm-4 col-lg-2 col-form-label">Home Team</label>
                      <div class="col-sm-8 col-lg-10">
                        <div class="input-group">
                          <input type="text" class="form-control" placeholder="Home Team">
                          <span class="input-group-addon" id="basic-addon3"></span> </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                    <div class="form-group mb-20">
                      <label class="col-sm-4 col-lg-2 col-form-label">Home Away</label>
                      <div class="col-sm-8 col-lg-10">
                        <div class="input-group"> <span class="input-group-addon"></span>
                          <input type="text" class="form-control" placeholder="Home Away">
                          <span class="input-group-addon"></span> </div>
                      </div>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="panel panel-default card-view">
            <div class="panel-heading">
              <div class="pull-left">
                <h6 class="panel-title txt-dark">Input Sizes</h6>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="panel-wrapper collapse in">
              <div class="panel-body">
                <div class="form-wrap">
                  <div class="form-group mb-20">
                    <label class="col-sm-4 col-lg-2 col-form-label">Total VIP seats</label>
                    <div class="col-sm-8 col-lg-10">
                      <div class="input-group"> <span class="input-group-addon" id="basic-addon4"><i class="typcn typcn-home"></i></span>
                        <input type="text" class="form-control" placeholder="Total VIP seats">
                      </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="form-group mb-20">
                    <label class="col-sm-4 col-lg-2 col-form-label">Total Regular Seat</label>
                    <div class="col-sm-8 col-lg-10">
                      <div class="input-group">
                        <input type="text" class="form-control" placeholder="Total Regular Seat">
                        <span class="input-group-addon" id="basic-addon5"><i class="typcn typcn-social-youtube"></i></span> </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="form-group mb-20">
                    <label class="col-sm-4 col-lg-2 col-form-label">Update Images</label>
                    <div class="col-sm-8 col-lg-10">
                      <div class="input-group"> <span class="input-group-addon"><i class="typcn typcn-th-large"></i></span>
                         <input name="files[]" type="file" multiple  class="form-control" />  
                        </div>
                    </div>
                    <div class="clearfix"></div>
                  </div>
                  <div class="alert alert-danger" role= "alert">
                    <p> This is where error messages will appear. Thank You</p>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
        	<button type="submit" class="btn btn-primary waves-effect col-sm-12"><span style="font-size:20px;">Update Match</span></button>
        </div>
      </div>



        </div>
    <!-- Footer -->
    <footer class="footer container-fluid pt-10 pb-10  pl-30 pr-30">
      <div class="row">
        <div class="col-sm-12 ">
          <div class="pull-left text-dark pt-5 small">Copyright @ 2018  Hyrax UX  Panel. All Rights Reserved</div>
          <div class="pull-right">Created with by <img src="plugins/assets/img/heartbeat.svg" alt="srgit" class="heart"> <a href="http://www.srgit.com/" target="_blank">SRGIT</a></div>
          <div class="clearfix"></div>
        </div>
      </div>
    </footer>
    <!-- /Footer --> 
  </div>
  <!-- /Main Content --> 
</div>