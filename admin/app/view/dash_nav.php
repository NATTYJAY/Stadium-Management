 <div class="wrapper light-theme dark-template"> 
 <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="mobile-only-brand pull-left">
      <div class="nav-header pull-left">
        <div class="logo-wrap"> <a href="index-2.html"> <img class="brand-img" src="<?php echo $direction; ?>plugins/assets/img/logo.png" alt="brand"/> <span class="brand-text">[ASK<strong>STADIUM</strong> ]</span> </a> </div>
      </div>
      <a id="toggle-btn" class="toggle-left-nav-btn inline-block ml-20 pull-left" href="javascript:void(0);"><i class="mdi mdi-format-list-bulleted"></i></a> <a id="toggle_mobile_search" data-toggle="collapse" data-target="#search_form" class="mobile-only-view" href="javascript:void(0);"><i class="mdi mdi-search"></i></a> <a id="toggle_mobile_nav" class="mobile-only-view" href="javascript:void(0);"><i class="mdi mdi-more"></i></a>
      <!-- <form id="search_form" role="search" class="top-nav-search collapse pull-left">
        <div class="input-group">
          <input type="text" name="example-input1-group2" class="form-control" placeholder="Search">
          <span class="input-group-btn">
          <button type="button" class="btn  btn-default"  data-target="#search_form" data-toggle="collapse" aria-label="Close" aria-expanded="true"><i class="pe-7s-search"></i></button>
          </span> </div>
      </form> -->
    </div>
    <!-- <div id="mobile_right_sidebar" class="mobile-right-sidebar pull-right">
      <ul class="nav navbar-right top-nav pull-right">
        <li> <a id="open_right_sidebar" href="#"><i class="pe-7s-chat top-nav-icon"></i></a> </li>
        <li class="dropdown app-drp"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="pe-7s-edit top-nav-icon"></i></a>
          <ul class="dropdown-menu app-dropdown"  data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <li>
              <div class="app-nicescroll-bar">
                <ul class="app-icon-wrap pa-10">
                  <li> <a href="weather.html" class="connection-item"> <i class="pe-7s-sun txt-info"></i> <span class="block">weather</span> </a> </li>
                  <li> <a href="vector-map.html" class="connection-item"> <i class="pe-7s-way txt-danger"></i> <span class="block">map</span> </a> </li>
                  <li> <a href="chats.html" class="connection-item"> <i class="pe-7s-chat txt-warning"></i> <span class="block">chat</span> </a> </li>
                  <li> <a href="calendar.html" class="connection-item"> <i class="pe-7s-date txt-primary"></i> <span class="block">calendar</span> </a> </li>
                  <li> <a href="email-inbox.html" class="connection-item"> <i class="pe-7s-mail-open-file txt-success"></i> <span class="block">e-mail</span> </a> </li>
                  <li> <a href="contact-card.html" class="connection-item"> <i class="pe-7s-config"></i> <span class="block">configure</span> </a> </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li class="dropdown alert-drp"> <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="pe-7s-alarm top-nav-icon"></i><span class="top-nav-icon-badge btn-sonar">1</span></a>
          <ul class="dropdown-menu alert-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <li>
              <div class="notification-box-head-wrap"> <span class="notification-box-head pull-left inline-block">notifications</span> <a class="txt-danger pull-right clear-notifications inline-block" href="javascript:void(0)"> clear all </a>
                <div class="clearfix"></div>
                <hr class="light-grey-hr ma-0"/>
              </div>
            </li>
            <li>
              <div class="streamline message-nicescroll-bar">
                <div class="sl-item"> <a href="javascript:void(0)">
                  <div class="icon bg-green"> <i class="mdi mdi-alarm-check"></i> </div>
                  <div class="sl-content"> <span class="inline-block capitalize-font  pull-left truncate head-notifications"> Neque porro quisquam est</span> <span class="inline-block font-11  pull-right notifications-time">5pm</span>
                    <div class="clearfix"></div>
                    <p class="truncate">Neque porro quisquam est.</p>
                  </div>
                  </a> </div>
                <hr class="light-grey-hr ma-0"/>
                <div class="sl-item"> <a href="javascript:void(0)">
                  <div class="icon bg-yellow"> <i class="mdi mdi-video-input-antenna"></i> </div>
                  <div class="sl-content"> <span class="inline-block capitalize-font  pull-left truncate head-notifications txt-warning">Neque porro quisquam est</span> <span class="inline-block font-11 pull-right notifications-time">12pm</span>
                    <div class="clearfix"></div>
                    <p class="truncate">Neque porro quisquam est.</p>
                  </div>
                  </a> </div>
                <hr class="light-grey-hr ma-0"/>
                <div class="sl-item"> <a href="javascript:void(0)">
                  <div class="icon bg-blue"> <i class="mdi mdi-comment-text"></i> </div>
                  <div class="sl-content"> <span class="inline-block capitalize-font  pull-left truncate head-notifications">61 new messages</span> <span class="inline-block font-11  pull-right notifications-time">6am</span>
                    <div class="clearfix"></div>
                    <p class="truncate"> Neque porro quisquam est.</p>
                  </div>
                  </a> </div>
                <hr class="light-grey-hr ma-0"/>
                <div class="sl-item"> <a href="javascript:void(0)">
                  <div class="sl-avatar"> <img class="img-responsive" src="<?php echo $direction; ?>plugins/assets/img/users/avatar-1.jpg" alt="avatar"/> </div>
                  <div class="sl-content"> <span class="inline-block capitalize-font  pull-left truncate head-notifications">Vivian Rox</span> <span class="inline-block font-11  pull-right notifications-time">3pm</span>
                    <div class="clearfix"></div>
                    <p class="truncate">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur, adipisci velit</p>
                  </div>
                  </a> </div>
                <hr class="light-grey-hr ma-0"/>
                <div class="sl-item"> <a href="javascript:void(0)">
                  <div class="icon bg-red"> <i class="mdi mdi-storage"></i> </div>
                  <div class="sl-content"> <span class="inline-block capitalize-font  pull-left truncate head-notifications txt-danger">99% server space occupied.</span> <span class="inline-block font-11  pull-right notifications-time">1pm</span>
                    <div class="clearfix"></div>
                    <p class="truncate">consectetur, adipisci velit.</p>
                  </div>
                  </a> </div>
              </div>
            </li>
            <li>
              <div class="notification-box-bottom-wrap">
                <hr class="light-grey-hr ma-0"/>
                <a class="block text-center read-all" href="javascript:void(0)"> read all </a>
                <div class="clearfix"></div>
              </div>
            </li>
          </ul>
        </li>
        <li class="dropdown auth-drp"> <a href="#" class="dropdown-toggle pr-0" data-toggle="dropdown"><img src="<?php echo $direction; ?>plugins/assets/img/users/avatar-2.jpg" alt="user_auth" class="user-auth-img img-circle"/><span class="user-online-status"></span></a>
          <ul class="dropdown-menu user-auth-dropdown" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
            <li> <a href="profile.html"><i class="mdi mdi-account"></i><span>Profile</span></a> </li>
            <li> <a href="#"><i class="mdi mdi-credit-card"></i><span>my balance</span></a> </li>
            <li> <a href="email-inbox.html"><i class="mdi mdi-email"></i><span>Inbox</span></a> </li>
            <li> <a href="#"><i class="mdi mdi-settings"></i><span>Settings</span></a> </li>
            <li class="divider"></li>
            <li class="sub-menu show-on-hover"> <a href="#" class="dropdown-toggle pr-0 level-2-drp"><i class="mdi mdi-check text-success"></i> available</a>
              <ul class="dropdown-menu open-left-side">
                <li> <a href="#"><i class="mdi mdi-check text-success"></i><span>available</span></a> </li>
                <li> <a href="#"><i class="mdi mdi-circle-o text-warning"></i><span>busy</span></a> </li>
                <li> <a href="#"><i class="mdi mdi-minus-circle-outline text-danger"></i><span>offline</span></a> </li>
              </ul>
            </li>
            <li class="divider"></li>
            <li> <a href="#"><i class="mdi mdi-power"></i><span>Log Out</span></a> </li>
          </ul>
        </li>
      </ul>
    </div> -->
  </nav>