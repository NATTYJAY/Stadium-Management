<!-- Match details modal start here please oo -->
<!-- <script src="<?php echo $direction; ?>plugins/vendors/bower_components/jquery/dist/jquery.min.js"></script> 
      <script src="<?php echo $direction?>adminjs/stadium_admin.js"></script> -->
<div id="myModal1" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Add Match Details Here</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                  	
                                    <div class="form-wrap">
                                      <form id="formp">
                                        <div class="form-body overflow-hide">
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputuname_1" style="color:white;">Match Date</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-account"></i></div>
                                           <input type="text" class="form-control mydatepicker" placeholder="mm/dd/yyyy" name="match_date" >
                      <span class="input-group-addon"><i class="fa fa-calendar"></i></span> 
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">Match Start Time</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" id="timepicker" placeholder="Check time" name="match_time">
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>

                                          <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_data" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfirudoluwawaḥdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>

                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputContact_1" style="color:white;">Home Team</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-cellphone"></i></div>
                                              <input type="text" class="form-control" id="exampleInputContact_1" placeholder="Home Team Name" name="home_team">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Away Team Name</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="exampleInputpwd_1" placeholder="Away Team Name" value="" name="away_team">
                                            </div>
                                          </div>
                                          
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Total VIP Seat</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="exampleInputpwd_1" placeholder="Total VIP seat" value="" name="seat_vip">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Total Regular Seat</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="exampleInputpwd_1" placeholder="Total VIP seat" value="" name="seat_regular">
                                            </div>
                                          </div>

                                           <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Choose Single/Mulitple Images</label>
                                            <div class="input-group">
                                            
                                              <input name="files[]" type="file" multiple  class="form-control" />  
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-success waves-effect">Save</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button><br><br>
                                        <div id="in" role= "alert"></div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>

            <!-- Match details modal start here please oo -->

            <!-- Checkers modal start here please-->
            <div id="checkers" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Add Checkers Personnel here</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <div id="justforme" role= "alert"></div>
                                    <div class="form-wrap">
                                      <form action="#" id="form">
                                        <div class="form-body overflow-hide">
                                            <div class="row">
                                              <div class="col-md-6">
                                                    <div class="form-group">
                                                      <label class="control-label mb-10" for="exampleInputContact_1" style="color:white;">First Name</label>
                                                      <div class="input-group">
                                                        <div class="input-group-addon"><i class="mdi mdi-cellphone"></i></div>
                                                        <input type="text" class="form-control" id="ch_first" placeholder="First Name">
                                                      </div>
                                                    </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Last Name</label>
                                                      <div class="input-group">
                                                        <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                                        <input type="text" class="form-control" id="ch_last" placeholder="Last Name" value="">
                                                      </div>
                                                    </div>
                                              </div>
                                            </div>

                                           
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Email</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="email" class="form-control" id="ch_email" placeholder="Email" value="">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Phone Number</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="ch_phone" placeholder="Phone Number" value="">
                                            </div>
                                          </div>

                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">PassWord</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="ch_password" placeholder="Phone Number" value="">
                                            </div>
                                          </div>
                                        </div>
                                        <button type="button" class="btn btn-success waves-effect" id="checkser_saveBTX">Save</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>

                 <!-- Checkers modal ends here please-->

                 <!-- Admin modal start here please-->

                      <div id="adminmodal" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Create Admin Priviledge here</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <div id="alrt" role= "alert"></div>
                                    <div class="form-wrap">
                                      <form action="#">
                                        <div class="form-body overflow-hide">
                                            <div class="row">
                                              <div class="col-md-6">
                                                    <div class="form-group">
                                                      <label class="control-label mb-10" for="ad_first" style="color:white;">First Name</label>
                                                      <div class="input-group">
                                                        <div class="input-group-addon"><i class="mdi mdi-cellphone"></i></div>
                                                        <input type="text" class="form-control" id="ad_first" placeholder="First Name">
                                                      </div>
                                                    </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Last Name</label>
                                                      <div class="input-group">
                                                        <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                                        <input type="text" class="form-control" id="ad_last" placeholder="Last Name" value="">
                                                      </div>
                                                    </div>
                                              </div>
                                            </div>
                                          
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Email</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="email" class="form-control" id="ad_email" placeholder="Email" value="">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Phone Number</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="ad_phone" placeholder="Phone Number" value="">
                                            </div>
                                          </div>
                                            <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Password</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="pasword" class="form-control" id="ad_password" placeholder="Phone Number" value="">
                                            </div>
                                          </div>
                                        </div>
                                        <button type="button" class="btn btn-success waves-effect"  id="savenow">Save</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>

                 <!-- Admin modal ends here please-->


                 <!-- Catgory modal added here -->



                      <div id="catmodal" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Add Category</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <div id="report" role= "alert"></div>
                                    <div class="form-wrap">
                                      <form action="#" id="catform">
                                        <div class="form-body overflow-hide">
                                           
                                          
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Category Name</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" placeholder="Category Name" value="" name="catname">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Corresponding Amount</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="exampleInputpwd_1" placeholder="Corresponding Amount" value="" name="catamount" >
                                            </div>
                                          </div>

                                          <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_cat" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfiruhīīīmmḥīdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-success waves-effect">Save</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>


                 <!-- category modal ends here -->


                 <!-- add ismges here   oo -->


                  




                 <!-- Add images her ends here o -->

                 <div id="update_match" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Update Match Details Here</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    
                                    <div class="form-wrap">
                                      <form id="uform">
                                        <div class="form-body overflow-hide">
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputuname_1" style="color:white;">Match Date</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-account"></i></div>
                                           <input type="text" class="form-control mydatepicker" placeholder="mm/dd/yyyy" name="umatch_date" id="um" >
                      <span class="input-group-addon"><i class="fa fa-calendar" ></i></span> 
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">Match Start Time</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control ut" id="timepicker" placeholder="Check time" name="umatch_time">
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>

                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">Open/Close Status</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <select class="form-control" name="pst" id="sta">
                                                <option value="1">Open</option>
                                                <option value="0">Close</option>
                                              </select>
                                            </div>
                                          </div>

                                          <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_datau" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfirudaoluwaaḥdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>

                                          <div class="form-group">
                                            <label class="control-label mb-10" for="hmt" style="color:white;">Home Team</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-cellphone"></i></div>
                                              <input type="text" class="form-control" id="hmt" placeholder="Home Team Name" name="uhome_team">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Away Team Name</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="awt" placeholder="Away Team Name" value="" name="uaway_team">
                                            </div>
                                          </div>

                                           <div class="form-group" hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">id</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="iid" placeholder="id" value="" name="sta_id">
                                            </div>
                                          </div>
                                          
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Total VIP Seat</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="totalvipseat" placeholder="Total VIP seat" value="" name="useat_vip">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Total Regular Seat</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="trs" placeholder="Total VIP seat" value="" name="useat_regular">
                                            </div>
                                          </div>

                                           <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Choose Single/Mulitple Images</label>
                                            <div class="input-group">
                                            
                                              <input name="files[]" type="file" multiple  class="form-control" />  
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-success waves-effect">Save</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button><br><br>
                                        <div id="ini" role= "alert"></div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>


                <!-- Select modal here or search match users here oo -->


                      <div id="search" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Choose Match Category</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <!-- <div class="alert alert-success" role= "alert">error message</div> -->
                                    <div class="form-wrap">
                                      <form action="#">
                                        <div class="form-body overflow-hide">
                                           
                                          
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Choose Match</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                             <select  class="form-control" name="search" id="serc">
                                             <?php echo $admin->fetch_stadium_id(); ?>
                                             </select>
                                            </div>
                                          </div>
                                          
                                        </div>
                                        <button type="button" class="btn btn-success waves-effect col-md-12 col-xs-12 col-lg-12" id="search11">Search</button>
                                       <!--  <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button> -->
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>


                <!-- Ends of the select match is here o -->



                <!--  Edit checkers here please oo -->

                    <div id="editcheckers" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Update Checkers Personnel here</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                     <div id="al" role="alert"></div>
                                    <div class="form-wrap">
                                      <form action="#" id="uformc">
                                        <div class="form-body overflow-hide">
                                            <div class="row">

                                              <div class="col-md-6">
                                                    <div class="form-group">
                                                      <label class="control-label mb-10" for="exampleInputContact_1" style="color:white;">First Name</label>
                                                      <div class="input-group">
                                                        <div class="input-group-addon"><i class="mdi mdi-cellphone"></i></div>
                                                        <input type="text" class="form-control" id="uch_first" placeholder="First Name" name="ufnamec">
                                                      </div>
                                                    </div>
                                              </div>
                                              <div class="col-md-6">
                                                  <div class="form-group">
                                                      <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Last Name</label>
                                                      <div class="input-group">
                                                        <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                                        <input type="text" class="form-control" id="uch_last" placeholder="Last Name" value="" name="ulnamec">
                                                      </div>
                                                    </div>
                                              </div>
                                            </div>

                                           
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Email</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="email" class="form-control" id="uch_email" placeholder="Email" value="" name="uenamec">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Phone Number</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="uch_phone" placeholder="Phone Number" value="" name="utnamec">
                                            </div>
                                          </div>

                                          <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_da" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfiruwḥdīāāaaḥdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>

                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">PassWord</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="uch_password" placeholder="Phone Number" value="" name="upnamec">
                                            </div>
                                          </div>

                                          <div class="form-group" hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">id</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="idrp" placeholder="Phone Number" value="" name="ied">
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-success waves-effect">Save</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>

                <!-- End of edit checkers here please ooo -->


                <!-- Update Category -->

                      <div id="catmodalupdate" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Update Category</h5>
                      </div>
                      <div class="modal-body"> 
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <div id="catupreport" role= "alert"></div>
                                    <div class="form-wrap">
                                      <form action="#" id="catformupdate">
                                        <div class="form-body overflow-hide">
                                           
                                          
                                         <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Category Name</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" placeholder="Category Name" value="" name="ucatname" id="ucatn">
                                            </div>
                                          </div>
                                          <div class="form-group">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">Corresponding Amount</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="ucata" placeholder="Corresponding Amount" value="" name="ucatamount" >
                                            </div>
                                          </div>

                                          <div class="form-group" hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputpwd_1"style="color:white;">ID</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-lock"></i></div>
                                              <input type="text" class="form-control" id="catid" placeholder="Corresponding Amount" value="" name="ucatid" >
                                            </div>
                                          </div>

                                          <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_updatecat" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfihmīmmḥīdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-success waves-effect">Save</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">Cancel</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>

                <!-- Update Category here -->

                <!-- Delete modal is here -->




                     <div id="delete_checker" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <!-- <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Add Category</h5>
                      </div> -->
                      <div role="alert" id="alertdeleteint"></div>
                      <div class="modal-body"> 
                         <div class="row">
                                    <div class="col-md-12 col-lg-12 col-xs-12 col-xl-12">
                                            <div role="alert" class="alert alert-warning mb-2">
                                                  <p> Are you sure you want to delete <b><span class="name_"></span></b> Details ?
                                            </div>
                                    </div>
                                    
                                  </div>
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <div id="report" role= "alert"></div>
                                    <div class="form-wrap">
                                      <form action="#" id="delc">
                                        <div class="form-body overflow-hide">
                                           
                                          
                                       <div class="row" hidden="hidden">
                                                  <div class="col-md-12 col-lg-12 col-xs-12 col-xl-12" hidden="hidden">
                                                           <fieldset class="form-group floating-label-form-group">
                                                          <label for="pro_id"> <h5><i class="fa fa-arrow-down"></i>id</h5></label>
                                                          <input type="text" id="idrp" placeholder="" class="form-control idp" name="proeee_id">
                                                        </fieldset>
                                                  </div>
                                                </div>

                                             <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_delcat" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfihmīmmḥīdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-danger waves-effect">YES</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">NO</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>





                     <div id="delete_cat" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <!-- <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Add Category</h5>
                      </div> -->
                      <div role="alert" id="alertdeleteint1"></div>
                      <div class="modal-body"> 
                         <div class="row">
                                    <div class="col-md-12 col-lg-12 col-xs-12 col-xl-12">
                                            <div role="alert" class="alert alert-warning mb-2">
                                                  <p> Are you sure you want to delete <b><span class="name_cat"></span></b> Details ?
                                            </div>
                                    </div>
                                    
                                  </div>
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <div id="report" role= "alert"></div>
                                    <div class="form-wrap">
                                      <form action="#" id="delcat">
                                        <div class="form-body overflow-hide">
                                           
                                          
                                       <div class="row">
                                                  <div class="col-md-12 col-lg-12 col-xs-12 col-xl-12" >
                                                           <fieldset class="form-group floating-label-form-group">
                                                          <label for="pro_id"> <h5><i class="fa fa-arrow-down"></i>id</h5></label>
                                                          <input type="text" id="catidp" placeholder="" class="form-control idp" name="cat_id">
                                                        </fieldset>
                                                  </div>
                                                </div>

                                             <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_delcate" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfihmīcatḥīdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-danger waves-effect">YES</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">NO</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>








                     <div id="delete_user" class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                      <!-- <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                        <h5 class="modal-title" id="myModalLabel">Add Category</h5>
                      </div> -->
                      <div role="alert" id="alertdeluser12"></div>
                      <div class="modal-body"> 
                         <div class="row">
                                    <div class="col-md-12 col-lg-12 col-xs-12 col-xl-12">
                                            <div role="alert" class="alert alert-warning mb-2">
                                                  <p> Are you sure you want to delete <b>this User</b> Details ?</p>
                                            </div>
                                    </div>
                                    
                                  </div>
                        <!-- Row -->
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="">
                              <div class="panel-wrapper collapse in">
                                <div class="panel-body pa-0">
                                  <div class="col-sm-12 col-xs-12">
                                    <div id="report" role= "alert"></div>
                                    <div class="form-wrap">
                                      <form action="#" id="delu">
                                        <div class="form-body overflow-hide">
                                           
                                          
                                       <div class="row" hidden="hidden">
                                                  <div class="col-md-12 col-lg-12 col-xs-12 col-xl-12" hidden="hidden">
                                                           <fieldset class="form-group floating-label-form-group">
                                                          <label for="pro_id"> <h5><i class="fa fa-arrow-down"></i>id</h5></label>
                                                          <input type="text" id="userid" placeholder="" class="form-control idp" name="user_id">
                                                        </fieldset>
                                                  </div>
                                                </div>

                                             <div class="form-group"  hidden="hidden">
                                            <label class="control-label mb-10" for="exampleInputEmail_1" style="color:white;">token</label>
                                            <div class="input-group">
                                              <div class="input-group-addon"><i class="mdi mdi-email"></i></div>
                                              <input class="form-control" name="token_user" value="<?php echo  $extra_function::encrypt_decrypt('encrypt','āfihmīuserḥīdī') ?>" >
                        <span class="input-group-addon"> <span class="fa fa-calendar-plus-o"></span> </span>
                                            </div>
                                          </div>
                                        </div>
                                        <button type="submit" class="btn btn-danger waves-effect">YES</button>
                                        <button type="button" class="btn btn-default waves-effect" data-dismiss="modal">NO</button>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /.modal-content --> 
                  </div>
                  <!-- /.modal-dialog --> 
                </div>