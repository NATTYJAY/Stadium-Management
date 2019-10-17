  <div class="fixed-sidebar-right">
    <ul class="right-sidebar">
      <li>
        <div  class="tab-struct user-tabs">
          <ul role="tablist" class="nav nav-tabs" id="right_sidebar_tab">
           <!--  <li class="active" role="presentation"><a aria-expanded="true"  data-toggle="tab" role="tab" id="chat_tab_btn" href="#chat_tab"><i class="pe-7s-chat"></i></a></li> -->
           <!--  <li role="presentation" class=""><a  data-toggle="tab" id="messages_tab_btn" role="tab" href="#messages_tab" aria-expanded="false"><i class="pe-7s-mail"></i></a></li> -->
           <!--  <li role="presentation" class=""><a  data-toggle="tab" id="settings_tab_btn" role="tab" href="#settings_tab" aria-expanded="false"><i class="pe-7s-keypad"></i></a></li> -->
          </ul>
          <div class="tab-content" id="right_sidebar_content">
            <!-- <div  id="chat_tab" class="tab-pane fade active in" role="tabpanel">
              <div class="chat-cmplt-wrap">
                <div class="chat-box-wrap">
                  <div class="add-friend"> <span class="inline-block txt-dark">Recent Chats</span> <a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="mdi mdi-plus"></i></a> <a href="javascript:void(0)" class="inline-block txt-grey"> <i class="mdi mdi-more"></i> </a>
                    <div class="clearfix"></div>
                  </div>
                  <div id="chat_list_scroll">
                    <div class="nicescroll-bar">
                      <ul class="chat-list-wrap">
                        <li class="chat-list">
                          <div class="chat-body"> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-2.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Peter Wyatt</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status away"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-1.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Vivian Rox</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status offline"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-3.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Mr. Danielle</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status online"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-4.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Suzi Cole</span> <span class="time block truncate txt-grey">Neque porro quisquam est..</span> </div>
                              <div class="status online"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-2.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Tom Taylor</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status offline"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-1.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Mitch Blue</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status online"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-3.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Jason Rudd</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status away"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-4.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Michelle</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status online"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> <a href="javascript:void(0)">
                            <div class="chat-data"> <img class="user-img img-circle"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-5.jpg" alt="user"/>
                              <div class="user-data"> <span class="name block capitalize-font">Ludacris Stack</span> <span class="time block truncate txt-grey">Neque porro quisquam est.</span> </div>
                              <div class="status away"></div>
                              <div class="clearfix"></div>
                            </div>
                            </a> </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="recent-chat-box-wrap">
                  <div class="recent-chat-wrap">
                    <div class="panel-heading ma-0">
                      <div class="goto-back"> <a  id="goto_back" href="javascript:void(0)" class="inline-block txt-grey"> <i class="mdi mdi-chevron-left"></i> </a> <span class="inline-block txt-dark">Max</span> <a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="mdi mdi-more"></i></a>
                        <div class="clearfix"></div>
                      </div>
                    </div>
                    <div class="panel-wrapper collapse in">
                      <div class="panel-body pa-0">
                        <div class="chat-content">
                          <ul class="nicescroll-bar pt-20">
                            <li class="friend">
                              <div class="friend-msg-wrap"> <img class="user-img img-circle block pull-left"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-2.jpg" alt="user"/>
                                <div class="msg pull-left">
                                  <p class="msng-name">Sam Wrote:</p>
                                  <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet?</p>
                                  <div class="msg-per-detail text-right"> <span class="msg-time txt-grey">5:01 PM</span> </div>
                                </div>
                                <div class="clearfix"></div>
                              </div>
                            </li>
                            <li class="self mb-10">
                              <div class="self-msg-wrap">
                                <div class="msg block pull-right"> Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
                                  <div class="msg-per-detail text-right"> <span class="msg-time txt-light">5:01 pm</span> </div>
                                </div>
                                <div class="clearfix"></div>
                              </div>
                            </li>
                            <li class="self">
                              <div class="self-msg-wrap">
                                <div class="msg block pull-right"> Consectetur, adipisci velit.
                                  <div class="msg-per-detail text-right"> <span class="msg-time txt-light">5:13 pm</span> </div>
                                </div>
                                <div class="clearfix"></div>
                              </div>
                            </li>
                            <li class="friend">
                              <div class="friend-msg-wrap"> <img class="user-img img-circle block pull-left"  src="<?php echo $direction; ?>plugins/assets/img/users/avatar-2.jpg" alt="user"/>
                                <div class="msg pull-left">
                                  <p class="msng-name">Sam Wrote:</p>
                                  <p>Neque porro quisquam.</p>
                                  <div class="msg-per-detail  text-right"> <span class="msg-time txt-grey">6:35 pm</span> </div>
                                </div>
                                <div class="clearfix"></div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="input-group">
                          <input type="text" id="input_msg_send" name="send-msg" class="input-msg-send form-control" placeholder="Type something">
                          <div class="input-group-btn emojis">
                            <div class="dropup">
                              <button type="button" class="btn  btn-default  dropdown-toggle" data-toggle="dropdown" ><i class="mdi mdi-mood"></i></button>
                              <ul class="dropdown-menu dropdown-menu-right">
                                <li><a href="javascript:void(0)">Action</a></li>
                                <li><a href="javascript:void(0)">Another action</a></li>
                                <li class="divider"></li>
                                <li><a href="javascript:void(0)">Separated link</a></li>
                              </ul>
                            </div>
                          </div>
                          <div class="input-group-btn attachment">
                            <div class="fileupload btn  btn-default"><i class="mdi mdi-attachment-alt"></i>
                              <input type="file" class="upload">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
           <!--  <div id="messages_tab" class="tab-pane fade" role="tabpanel">
              <div class="message-box-wrap">
                <div class="add-friend"> <span class="inline-block txt-dark">messages</span> <a href="javascript:void(0)" class="inline-block text-right txt-grey"><i class="mdi mdi-search"></i></a> <a href="javascript:void(0)" class="inline-block txt-grey"> <i class="mdi mdi-more"></i> </a>
                  <div class="clearfix"></div>
                </div>
                <div class="set-height-wrap">
                  <div class="streamline message-box nicescroll-bar"> <a href="javascript:void(0)">
                    <div class="sl-item">
                      <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-2.jpg" alt="avatar"/> </div>
                      <div class="sl-content"> <span class="inline-block capitalize-font   pull-left message-per">Peter Wyatt</span> <span class="inline-block font-11  pull-right message-time">12:28 AM</span>
                        <div class="clearfix"></div>
                        <span class=" truncate message-subject">Neque porro quisquam est qui dolorem ipsu messm quia dolor sit amet consectetur</span>
                        <p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsu messm quia dolor sit amet consectetur, adipisci velit</p>
                      </div>
                    </div>
                    </a> <a href="javascript:void(0)">
                    <div class="sl-item">
                      <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-1.jpg" alt="avatar"/> </div>
                      <div class="sl-content"> <span class="inline-block capitalize-font   pull-left message-per">Vivian Rox</span> <span class="inline-block font-11  pull-right message-time">1 Feb</span>
                        <div class="clearfix"></div>
                        <span class=" truncate message-subject">Neque porro quisquam est qui dolorem ipsu messm quia dolor sit amet consectetur</span>
                        <p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit</p>
                      </div>
                    </div>
                    </a> <a href="javascript:void(0)">
                    <div class="sl-item">
                      <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-3.jpg" alt="avatar"/> </div>
                      <div class="sl-content"> <span class="inline-block capitalize-font   pull-left message-per">Mr. Danielle</span> <span class="inline-block font-11  pull-right message-time">31 Jan</span>
                        <div class="clearfix"></div>
                        <span class=" truncate message-subject">Neque porro quisquam est qui dolorem ipsu messm quia dolor sit amet consectetur nominees</span>
                        <p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit</p>
                      </div>
                    </div>
                    </a> <a href="javascript:void(0)">
                    <div class="sl-item">
                      <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-4.jpg" alt="avatar"/> </div>
                      <div class="sl-content"> <span class="inline-block capitalize-font   pull-left message-per">Tom Taylor</span> <span class="inline-block font-11  pull-right message-time">29 Jan</span>
                        <div class="clearfix"></div>
                        <span class=" truncate message-subject">Neque porro quisquam est qui dolorem ipsu messm quia dolor sit amet consectetur</span>
                        <p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit</p>
                      </div>
                    </div>
                    </a> <a href="javascript:void(0)">
                    <div class="sl-item">
                      <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-5.jpg" alt="avatar"/> </div>
                      <div class="sl-content"> <span class="inline-block capitalize-font   pull-left message-per">Mitch Blue</span> <span class="inline-block font-11  pull-right message-time">27 Jan</span>
                        <div class="clearfix"></div>
                        <span class=" truncate message-subject">Neque porro quisquam.</span>
                        <p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit</p>
                      </div>
                    </div>
                    </a> <a href="javascript:void(0)">
                    <div class="sl-item">
                      <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-2.jpg" alt="avatar"/> </div>
                      <div class="sl-content"> <span class="inline-block capitalize-font   pull-left message-per">Michelle</span> <span class="inline-block font-11  pull-right message-time">19 Jan</span>
                        <div class="clearfix"></div>
                        <span class=" truncate message-subject">Neque porro quisquam es.</span>
                        <p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit</p>
                      </div>
                    </div>
                    </a> <a href="javascript:void(0)">
                    <div class="sl-item">
                      <div class="sl-avatar avatar avatar-sm avatar-circle"> <img class="img-responsive img-circle" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-1.jpg" alt="avatar"/> </div>
                      <div class="sl-content"> <span class="inline-block capitalize-font   pull-left message-per">Linda Stack</span> <span class="inline-block font-11  pull-right message-time">13 Jan</span>
                        <div class="clearfix"></div>
                        <span class=" truncate message-subject">Neque porro quisquam.</span>
                        <p class="txt-grey truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit</p>
                      </div>
                    </div>
                    </a> </div>
                </div>
              </div>
            </div> -->
            <div id="settings_tab" class="tab-pane fade active in" role="tabpanel">
              <div class="settings-box-wrap">
               <!--  <div class="add-settings text-center txt-dark pt-15"> General Settings
                  <div class="clearfix"></div>
                </div> -->
                <div class="set-height-wrap"> 
                  <!-- settings-List -->
                  <ul class="settings-list nicescroll-bar">
                    <!-- <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Email Notifications</div>
                        <div class="pull-right">
                          <input type="checkbox" class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Site Tracking</div>
                        <div class="pull-right">
                          <input type="checkbox" checked class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">SMS Alerts </div>
                        <div class="pull-right">
                          <input type="checkbox" class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Backup Storage</div>
                        <div class="pull-right">
                          <input type="checkbox" checked class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Audit Logs</div>
                        <div class="pull-right">
                          <input type="checkbox" class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li> -->
                    <li>
                      <div class="add-settings text-center txt-dark pt-15"> STADIUM SETTINGS
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Open/Close Portal </div>
                        <div class="pull-right">
                          <input type="checkbox" class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <!-- <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Error Reporting </div>
                        <div class="pull-right">
                          <input type="checkbox" checked class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Applications Logs </div>
                        <div class="pull-right">
                          <input type="checkbox" checked class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Backup Servers</div>
                        <div class="pull-right">
                          <input type="checkbox" class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li>
                    <li class="settings-item">
                      <div class="list-settings">
                        <div class="pull-left">Audit Logs</div>
                        <div class="pull-right">
                          <input type="checkbox" class="switch-setting-bar switch-setting" data-color="#716aca" data-size="small"/>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </li> -->
                  </ul>
                  <!-- /settings-List --> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>