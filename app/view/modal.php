
   <!-- Modal -->

    <script src="<?php echo $direction?>assets/js/jquery.v2.0.3.js"></script>
    <script src="<?php echo $direction?>assets/js/jquery-ui.js"></script> 
      <script src="<?php echo $direction?>completejs/reg.js"></script>
                          <div class="modal fade text-left" id="iconForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel34"
                          aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h3 class="modal-title" id="myModalLabel34">Login Here</h3>
                                  
                                </div>
                                <form>
                                  <div class="modal-body">
                                      <div id="logalert" role="alert"></div><br>
                                    <label>Email: </label>
                                    <div class="form-group position-relative has-icon-left">
                                      <input type="text" placeholder="Email Address" class="form-control" id="email_login">
                                      <div class="form-control-position">
                                        <i class="fa fa-envelope font-medium-5 line-height-1 text-muted icon-align"></i>
                                      </div>
                                    </div>
                                    <label>Password: </label>
                                    <div class="form-group position-relative has-icon-left">
                                      <input type="password" placeholder="Password" class="form-control" id="password_log">
                                      <div class="form-control-position">
                                        <i class="fa fa-lock font-large-1 line-height-1 text-muted icon-align"></i>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                    <span class="size12">Not yet registerd ?</span>           
                                    <a href="#" data-toggle="modal" data-target="#register" data-dismiss="modal">Register Here</a>
                                  </div>
                                  </div>

                                  <div class="modal-footer">
                                     <button type="reset" class="bluebtn margtop20" data-dismiss="modal" > Close</button>
                                    <button type="button" class="btn btn-success margtop20" id="logBtx">Login</button>
                                <!-- <button type="button" class="btn btn-default margtop20" hidden="hidden"  id="logremove" disabled="disabled" ><b>Processing Please Wait...</b></button> -->
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>

                          <!-- Modal registration  -->


 <div class="modal fade text-left" id="register" tabindex="-1" role="dialog" aria-labelledby="myModalLabel34"
                          aria-hidden="true">
                            <div class="modal-dialog" role="document">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h3 class="modal-title" id="myModalLabel34">Registration</h3>
                                
                                </div>
                                <form>
                                  <div class="modal-body">
                              
                    					<div class="col-md-6">
                    						<span class="size12">First Name</span>						
                    						<input type="text" class="form-control" placeholder="First Name" id="first_n">
                    						<span style="color:red" id="f_err"></span>
                    					</div>
                    					<div class="col-md-6 textleft">
                    						<span class="size12">Last Name</span>	
                    						<input type="text" class="form-control" placeholder="Last Name" id="last_n">
                    						<span style="color:red" id="l_err"></span>
                    					</div>
					                         <div class="clearfix"></div>
                                  <div class="col-md-6">
                                    <span class="size12">Preferred Email</span>           
                                    <input type="email" class="form-control" placeholder="Email" id="email_n">
                                    <span style="color:red" id="e_err"></span>
                                  </div>
                                  <div class="col-md-6 textleft">
                                    <span class="size12">Confirm Email</span> 
                                    <input type="text" class="form-control" placeholder="Confirm Email" id="c_email_n">
                                    <span style="color:red" id="ce_err"></span>
                                  </div>
                                  <div class="clearfix"></div>
                                     <div class="col-md-6">
                                    <span class="size12">Preferred Password</span>           
                                    <input type="password" class="form-control" placeholder="password" id="pass_n">
                                    <span style="color:red" id="pass_err"></span>
                                  </div>
                                  <div class="col-md-6 textleft">
                                    <span class="size12">Confirm password</span> 
                                    <input type="password" class="form-control" placeholder="Confirm Password" id="cpass_n">
                                    <span style="color:red" id="cpass_err"></span>
                                  </div>
                                  <div class="clearfix"></div>
                                    <div class="col-md-6">
                                      <span class="size12">Preferred Phone Number</span>            
                                      <input type="text" class="form-control" placeholder="Phone Number" id="phone_number">
                                      <span style="color:red" id="p_err"></span>
                                    </div>
                                    <div class="col-md-6 textleft">
                                      <span class="size12">Confirm Phone Number*</span> 
                                      <input type="text" class="form-control" placeholder="Confirm Phone Number" id="c_phone_number">
                                      <span style="color:red" id="c_phone_err"></span>
                                    </div>
                                    <div class="clearfix"></div><br/>
                                     <div class="col-md-12" id="regalert">
                                     </div>
                                     <div class="clearfix"></div>
                                  </div>
                                  <div class="modal-footer">
                                    
                                    <button type="reset" class="bluebtn margtop20" data-dismiss="modal" > Close</button>
                                    <button type="button" class="bluebtn margtop20" id="regnow" >Register Now</button>
                                    <!-- <div class="row">
                                        <div class="col-md-4"></div>
                                        <div class="col-md-8"><div role= "alert" id="success"></div></div>
                                      </div> -->
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>

