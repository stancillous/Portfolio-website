<template>
    
    <main data-scroll-container id="main" class="main">
        
        <!-- <div class="bg-video-wrp">
            <div class="bgv">
                <video src="./assets/bgvid.mp4" autoplay loop muted></video>
            </div>
        </div> -->

      <header class="page-header">
        <!-- <div class="bg-video-wrp">
                <div class="bgv">
                    <video src="./assets/bgvid.mp4" autoplay loop muted></video>
                </div>
            </div> -->
                  <div class="page-header-container" data-cursor="-hidden">
                      <nav class="nav-bar">
                          <div class="logo">
                              <div class="logo-image-container">
                                
                                <a href="https://stanceray.com/" class="top-page-logo lg">stance</a>
                              </div>
                          </div>
                          <div class="page-header-links">
                            <div class="ph-links">
                                <ul>
                                    <li class="menu-links-items"> <div>01</div> <a data-scroll-to class="menu-links-items-a active-menu-link" href="#top-page-section-id">home</a></li>
                                    <li class="menu-links-items"> <div>02</div> <a data-scroll-to class="menu-links-items-a" href="#about-section-id">about</a></li>
                                    <li class="menu-links-items"> <div>03</div> <a data-scroll-to class="menu-links-items-a" href="#projects-section-id">projects</a></li>
                                    <li class="menu-links-items"> <div>04</div> <a data-scroll-to class="menu-links-items-a" href="#features-section-id">services</a></li>
                                    <li class="menu-links-items"> <div>05</div> <a data-scroll-to class="menu-links-items-a" href="#send-message-section-id">contact</a></li>
  
                                  </ul>

                            </div>
                            <div class="socials">
                                <div class="nav-mail-div">
                                        <p>Get in touch</p>
                                        <a id="nav-mail" href="mailto:stancillousray@gmail.com">stancillousray@gmail.com</a>
                                   </div>
                                    <div class="social-links-container">
                                        <div class="social-links-a-div">
                                            <a target="_blank" href="https://github.com/stancillous">github</a>
                                            <a target="_blank" href="https://www.linkedin.com/in/stancillous/">linkedin</a>
                                            <a target="_blank" href="https://t.me/Stancillous">telegram</a>
                                            <a target="_blank" href="https://www.instagram.com/stancillous/">instagram</a>
                                        </div>
                                    </div>
                            </div>

                          </div>

                            <div class="menu-btn">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                          
                    </nav>
                </div>
                

                  

      </header>
      
      <!-- <projectsComp/> -->
      <topSectionComp/>
      <aboutComp/>
      <projectsComp/>
      <featuresComp/>
      <moreInfo/>
      <contactComp/>
      <!-- <bottomSectionComp/> -->
    </main>
</template>
    
    <script>
      import topSectionComp from './components/topsection.vue'
      import aboutComp from './components/about.vue'
      import projectsComp from './components/projects.vue'
      import moreInfo from './components/moreInfo.vue'
    //   import bottomSectionComp from './components/bottomsection.vue'
      import contactComp from './components/contact.vue'
      import featuresComp from './components/features.vue'
    
    export default {
      name: 'App',
      components: {
        topSectionComp,
        aboutComp,
        projectsComp,
        contactComp,
        featuresComp,
        moreInfo,
        // bottomSectionComp,
    
      }
    }
    </script>
    
    <style lang="scss">

    
    @import url('../cursor/utils.css');
    @import url('../cursor/cursor.css');
    
    
    
    
    $web-color:#000000;
    $web-color2:#00ff998f;
    $body-color:rgb(224, 224, 224);
    $body-color:#f0ebeb;
    
    
    $web-font2:"General Sans", sans-serif;
    $websiteColor:#bb2649;
    
    // font weights
    
    $light:300;
    $regular:400;
    $medium:500;
    $bold:700;
    $black:900;
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        font-size: 10px;
        scroll-behavior: smooth;
        
    }
    
    body{
        font-family:$web-font2;
        // overflow-x: hidden;
        min-height: 100vh;
    }

    .section-title{
        font-family: Melodrama, sans-serif;
        font-weight: 800;
        font-size: 6vw;
        // opacity: .8;
        text-transform: uppercase;
    }
    
    
    section{
        border: none;
        margin:10rem 0;
        padding: 17rem 0;
    }
    
    .main{
        margin: 0 auto;
        opacity: 0;


        .bg-video-wrp{
        position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    display: block;
    min-width: 100%;
    min-height: 100%;
    background-color: hsla(0, 0%, 100%, 0.52);
    opacity: 0.11;
    -webkit-filter: invert(100%);
    filter: invert(100%);
    display: none;
        .bgv{
            video{
                background-size: cover;
                background-position: 50% 50%;
                position: absolute;
                margin: auto;
                width: 100%;
                height: 100%;
                right: -100%;
                bottom: -100%;
                top: -100%;
                left: -100%;
                object-fit: cover;
                z-index: -100;
            }
        }
    }

       
        
    }
    
    //HEADER
    .page-header{
        position: absolute;
        width: 100%;
        height: 15vh;
        top: 0;
        left: 0;
        z-index: 323;
        transition: all .5s ease-in-out;

        .bg-video-wrp{
        position: fixed;
        left: 0%;
        top: 0%;
        right: 0%;
        bottom: 0%;
        display: block;
        height: 15vh;
        background-color: hsla(0, 0%, 100%, 0.52);
        opacity: 0.11;
        -webkit-filter: invert(100%);
        filter: invert(100%);
        z-index: -100;
            .bgv{
                video{
                    background-size: cover;
                    background-position: 50% 50%;
                    position: absolute;
                    margin: auto;
                    width: 100%;
                    height: 100%;
                    right: -100%;
                    bottom: -100%;
                    top: -100%;
                    left: -100%;
                    object-fit: cover;
                    z-index: -100;
                }
            }
        }
        .page-header-container{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .nav-bar{
                width: 93%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                //LOGO
                .logo{
                    .logo-image-container{
                        .top-page-logo{
                            text-decoration: none;
                            color: rgb(0, 0, 0);
                            opacity: .8;
                            font-family: 'Chillax', sans-serif;
                            font-weight: 600;
                            font-size: 2rem;
                            // font-size: 4rem;
                            color:white;
                            -webkit-text-stroke-color: rgb(24, 24, 24);
                            -webkit-text-stroke-width: .5px;
                        }
  
                    }
                }
                //MENU LINKS
                .page-header-links{
                    position: fixed;
                    top:0;
                    left:0;
                    bottom:0;
                    height: 100vh;
                    width: 100vw;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    background-color: white;
                    place-items: center;
                    align-items: center;
                    opacity: 0;
                        visibility: hidden;
                        clip-path: inset(0 0 0 50%);
                        transition: all .6s cubic-bezier(0.33, 1, 0.68, 1);
                    
                    a{
                        font-weight: 600;
                        font-size: 3.2rem;
                        text-decoration: none;
                        color: black;
                    }

                    .ph-links{

                        ul li{
                            list-style: none;
                            display: inline-block;
                            display: block;
                            position: relative;
                            padding: 1rem 0;
                            margin-right: 4vw;
                            
                            div{
                                display: inline-block;
                                text-align: center;
                                font-size: 2rem;
                                opacity: .7;
                                font-weight: 600;
                                transform: translate(0px, -5px) rotate(-90deg);
                                padding: 0 1.5rem;
                            }

                            .menu-links-items-a{
                                text-transform: uppercase;
                                font-family: Melodrama, sans-serif;
                                // padding: 2rem 0;

                            }
                            .active-menu-link{
                                color:$websiteColor;
                            }
                           
                            
                            #blog-small-cta{
                                    padding: unset;
                                }
                        }

                    }

                    .socials{

                        padding: 1rem;
                        color:black;
                        //DIV TO BE SHOWN ON SMALL SCREENS WITH THE GET IN TOUCH MESSAGE AND EMAIL
                        .nav-mail-div{
                            margin: 2rem 0;
                            p{
                                font-size: 1.4rem;
                                opacity: .9;
                                font-weight: $medium;
                                font-weight: 500;
                                padding-bottom: .8rem;
                            }
                            a{
                                font-size: 1.3rem;
                                font-weight:500;
                                position: relative;
                                color:$websiteColor;
                                &::after{
                                    content: '';
                                    display: block;
                                    height: .1rem;
                                    position: absolute;
                                    left: 0;
                                    background-color:$websiteColor;
                                    bottom: -6%;
                                    right: 0;
                                        }
                                
                            }
                        }
                        //DIV WITH THE SOCIAL LINKS
                        .social-links-container{
                            // border: 1px solid red;
                            .social-links-a-div{
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                grid-gap:1rem;
                                grid-row-gap: 3rem;
                                a{
                                    font-size: 1.3rem;
                                    opacity: .8;
                                    text-transform: uppercase;
                                    position: relative;
                                }
                            }
                        }


                    }

                }


                .menu-btn{
                    display: grid;
                    cursor: pointer;
                    padding: 1rem;
                    grid-template-columns: 1fr 1fr;
                    span{
                        display: block;
                        height: 8px;
                        width: 8px;
                        background-color: $websiteColor;
                        padding: .1rem;
                        margin: .1rem;
                        transition: all .4s cubic-bezier(0.075, 0.82, 0.165, 1);
                        
                    }
                }
                 
                .menu-btn.active{
                    span{
                        &:nth-child(1){
                            opacity:0;

                        }
                        &:nth-child(2){
                            transform:translateY(8px);
                        }
                        &:nth-child(3){
                            transform:translateY(-2px);
                        }
                        &:nth-child(4){
                            opacity:0;
                        }
                    }
                }

            }
        }
    }

    .top-page-section{
    // background-image: url(./assets/cube-transformed.jpeg);
    // background-repeat: no-repeat;
    // background-size: cover;
    // background-position: right;
    // background-blend-mode: color;
    height: 85vh;
    width:100vw;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    // position: relative;

    .bg-video-wrp{
        position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    display: block;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 0.52);
    opacity: 0.11;
    -webkit-filter: invert(100%);
    // display: none;
    z-index: -100;
    filter: invert(100%);
        .bgv{
            video{
                background-size: cover;
                background-position: 50% 50%;
                position: absolute;
                margin: auto;
                width: 100%;
                height: 100%;
                right: -100%;
                bottom: -100%;
                top: -100%;
                left: -100%;
                object-fit: cover;
                z-index: -100;
            }
        }
    }
    //DIV WITH THE TOP SECTION CONTENT
    .top-page-content{
         height: 100%;
        // width: 90%;
        display: flex;
        align-items: center;
        padding:1rem;
        justify-content: center;
        // border: 1px solid red;
        .top-page-content-container{
            padding: .5rem;
            padding: 1rem 2rem;
            .greeting{
                // border: 1px solid black;
                h1{
                    font-size: 1.4rem;
                    font-weight: 600;
                    opacity: .8;
                    letter-spacing: .1rem;
                    color: $websiteColor;
                    // padding: 0 0 0 .8rem;
                }
            }
            //NAME
            .name{
                margin-top: .2rem;
                h1{
                    // white-space: nowrap;
                    font-weight: $black;
                    font-size: 4.7rem;
                    text-transform: capitalize;
                }
            }

            //PROFESSTION
            .profession{
                margin-top: .2rem;
                h1{
                    font-size: 4.5rem;
                    padding: .6rem 0;
                    font-weight: $black;
                    opacity: .7;
                    // font-weight: $medium;

                   
                }
            }
            //INFO
            .info{
                // border: 1px solid black;
                margin-top: .2rem;
                p{
                    max-width: 55rem;
                    font-size: 1.5rem;
                    font-weight: 600;
                    text-align: left;
                    opacity: 1;
                    span{
                        text-align: right;
                    }
                }
            }
            .blog-ex-cta{
                margin-top: 4rem;
                .bxc-btn{
                    a{
                        text-decoration: none;
                        font-weight: 600;
                        padding: 1.5rem 2rem;
                        font-size: 1.4rem;
                        opacity: .9;
                        color: black;
                        border-radius: .3rem;
                        border: 1px solid $websiteColor;
                        // border: 1px solid rgb(58, 56, 56);
                    }
                }
            }
        }

       

        }
    }


    // ABOUT ME SECTION
    .about-me-section{
        color: black;
        // padding: 10rem 0;
        margin:10rem 0;
        z-index: 109;
        background-color: transparent;
       
        .about-me-section-header-and-info{
            max-width: 1000px;
            padding: 2rem 6rem;
            margin: 0 auto;
            //THE TITLE
            .about-me-header{
                // border: 1px solid white;
                display: flex;
                align-items: center;
                padding:0 .5rem;
                justify-content: center;
                justify-content: flex-start;
               
               
            }
            //THE DIV WITH ABOUT ME TEXT AND IMAGE
            .about-me-flex-container{
                display: flex;
                // height: 100%;
                width: 100%;
                align-items: center;
                justify-content: center;
                .about-me-container{
                    // padding: 2rem 0;
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    place-items: left;
                    .about-me-info{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .about-me-info-paragraph{
                            padding: .2rem;
                            p{
                                // letter-spacing: .1rem;
                                padding: 1rem 0;
                                font-weight: 500;
                                background: linear-gradient(
                                    to right,
                                    rgb(0, 0, 0) 50%,
                                    rgb(5, 5, 5) 50%
                                    // rgb(255, 255, 255) 50%,
                                    // rgb(189, 181, 181) 50%
                                );
                                font-size: 1.6rem;
                                background-size: 200% 100%;
                                padding: unset;
                                margin: 1rem;
                                background-position-x: 100%;
                                color: transparent;
                                background-clip: text;
                                -webkit-background-clip: text;
                                opacity: 1;

                                a{
                                    position: relative;
                                    color: black;
                                    text-decoration: none;
                                    font-size: 1.6rem;
                                    &::after{
                                        content: '';
                                        display: block;
                                        height: .1rem;
                                        position: absolute;
                                        left: 0;
                                        bottom: -2%;
                                        background-color: black;
                                        right: 0;
                                    }
                                }
                            }
                            #education{
                                margin-bottom: 3rem;
                                margin-top: 2rem;
                            }
                            ul{
                                // border: 2px solid;
                                // margin-bottom: 3rem;
                                display: grid;
                                padding-left: 1.2rem;
                                grid-template-columns: 1fr 1fr 1fr;
                                li{
                                    list-style-type: none;
                                    font-size: 1.4rem;
                                    font-weight: $medium;
                                    padding: .4rem ;
                                    color: $websiteColor;
                                    &::before{
                                        content: "\2023";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
                                        color: rgb(56, 54, 54); /* Change the color */
                                        font-weight: lighter; /* If you want it to be bold */
                                        display: inline-block; /* Needed to add space between the bullet and the text */
                                        width: .7rem; /* Also needed for space (tweak if needed) */
                                        margin-left: -1em; /* Also needed for space (tweak if needed) */
                                    }
                                }
                            }
                            
                        }
                    }
                    .about-me-image{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        .image-container{
                            height: 27rem;
                            width:27rem;
                            // border: 1px solid rgb(196, 190, 190);
                            // background-color: red;
                            .image{
                                height: 30rem;
                                width:30rem;
                                position:relative;
                                //the line behind the image
                                .img-b-line{
                                    height: 100%;
                                    width: 100%;
                                    border: 1px dotted rgb(36, 35, 35);
                                    position: absolute;
                                    bottom: -1rem;
                                    right: -1rem;
                                    
                                }
                                #amimg{
                                    object-fit: cover;
                                    height: 100%;
                                    width: 100%;
                                    // bottom: 1.5rem;
                                    // right: 1.5rem;
                                }

                                &::after{
                                    position: absolute;
                                    content: "";
                                    height: 100%;
                                    width: 100%;
                                    top: 0;
                                    left: 0;
                                    background-color: $websiteColor;
                                    opacity: .3;
                                }

                                // &:hover{
                                    
                                //     &::after{
                                //         all: unset;
                                //     }
                                // }

                            }
                        }
                    }
                }
            }
        }

       
    }

    .features-section{
        min-height: 100vh;
        padding: 1rem;
        margin: 5rem 0;
        margin-top: 10rem;
        .scroll-stn {
            color: black;
            margin: 0 auto;
            max-width: 1200px;


            .stn {
                padding-top: 4rem;
            height: 50vh;
            width: 100%;
            
            .text-div{
                max-width: min(500px, 100%);
                margin:0 auto;
                padding:1.5rem;
                padding: 3rem;
                p{
                    font-size: 1.6rem;
                    font-weight: 500;
                }
            }
            }
            }


}
    
    //PROJECTS SECTION
    .my-p-section{
        .mps-wrapper{
            max-width: 1200px;
            padding: 1rem;
            margin: 0 auto;

            
            .projects-container{
                margin-top: 2rem;
                display: grid;
                grid-template-columns: 1fr 1fr;

                .project-info{

                    // margin: 1rem;
                    border-radius: .2rem;
                    // padding:  6.5rem 1.5rem;
                    position: relative;
                    background-color: rgb(24, 24, 25);
                    position: fixed;
                    height: 100%;
                    width: 100%;
                    top:0;
                    height:100vh;
                    width:100vw;
                    left: 0;
                    color:white;
                    display: grid;
                    place-items: center;
                    background-color: rgba(0, 0, 0, 0.952);
                    opacity: 0;
                    visibility: hidden;
                    transition: all .4s ease;
                    z-index: 1221;
    

                    .pdiv{
                        max-width: 1000px;
                        margin:0 auto;

                        .close-modal-div{
                        margin-bottom: 0.5rem;
                        padding: 0 3rem;
                        text-align: right;
                        .close-modal{
                            cursor: pointer;

                            a{
                                color: white;
                                font-size: 3rem;
                            }
                            svg{
                                color: white;
                                fill:white;
                                cursor: pointer;
                            }

                        }
                        
                        }

                        .pdiv-grid{
                            display: grid;
                        grid-template-columns: 1fr 1fr;
                        padding: 1rem;
                        align-items: center;
                            .pdiv-left{
                                margin:1rem;
                                img{
                                    width:30rem;
                                    height: 30rem;
                                    object-fit: cover;
                                }
                            }
                            .pdiv-right{
                                padding: 2rem;
                    
                                .project-section-icons-container{
                                    // border: 1px solid;
                                    padding: 1rem .5rem;
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    margin-bottom: 2rem;
                                    color: white;
                                    a{
                                        color: white;
                                        svg{
                                            width: 2rem;
                                        }
                                    }
                                    //GIVING PADDING RIGHT TO THE COODE ICON
                                    .code{
                                        padding-right: 1.8rem;
                                    }
                                }
                                h1{
                                    font-size: 1.5rem;
                                    padding-bottom: 1rem;
                                    text-transform: capitalize;
                                    font-weight: 600;
                                }
                                p{
                                    font-weight: $medium;
                                    font-size: 1.5rem;
                                    padding: 1rem 0;
                                    padding-bottom: 2rem;
                                    opacity: .9;
                                    letter-spacing: .02rem;
                                    padding-bottom: 2rem;
                                }
                                //the div with the tech used 
                                .tech-used-container{
                                    width: 100%;
                                    margin-top: 2rem;
                                    position: absolute;
                                    color:white;
                                    bottom: 0;
                                    display: flex;
                                    margin-bottom: .5rem;
                                    display: none;
                                    .tech-used{
                                        padding-right:.8rem;
                                        font-size: 1.2rem;
                                        opacity: .9;
                                    }
                                }
                            }

                        }

                        //THE DIV WITH THE ICONS    

                    }
                }
                .project-div{
                    cursor: pointer;
                    display: flex;
                    padding:2rem;
                    height:45.5rem;
                    margin: 2rem 1rem;;
                    width:37rem;
                    border: 1px solid rgb(86, 83, 83);
                    flex-direction: column;
                    .project-img{
                        height:37rem;
                        width:100%;
                        img{
                            object-fit:cover;
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .project-name{
                        h2{
                            padding: 1.5rem 0;
                            font-weight: 500;
                            font-size: 1.7rem;
                            text-transform: capitalize;
                        }
                    }
                }

                .exceed-project-two{
                    margin-top: 8rem;
                }
               
                .cprofiles-project-four{
                    margin-top: 8rem;
                }

                //PROJECTS INFO
                .project-info{
                    opacity:0;
                    visibility: hidden;
                }
                .show-project-info{
                    opacity: 1;
                    visibility: visible;
                }
            }

            .ext-cta{
                margin-top: 4rem;
                padding-left: 1.5rem;
                a{
                    text-decoration: none;
                    color: black;
                    font-size: 1.4rem;
                    font-weight: 500;
                    position: relative;
    
                    &::after{
                        content: '';
                        height: .1rem;
                        width: 100%;
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: -.5rem;
                        background-color: black;
                    }
    
                }
            }

        }
    }



    //SEND ME A MESSAGE SECTION
    .send-message-section{
        margin: 0;
        background-color: #161616;
        color: white;
        padding: 7rem 0;

        .headers{
            .section-title{
                padding-bottom: 2rem;
            }
        }
        .send-message-container{
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            padding:1rem;
            grid-template-columns: 1fr 1fr;

            
            .ml-and-form{
                padding: 1rem;
                .menu-links{
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    ul li{
                        list-style-type: none;
                        padding: .3rem 0;
                        a{
                            opacity: .9;
                            text-decoration: none;
                            font-size: 1.6rem;
                            color:white;     
                            font-weight: 400;
                            text-transform: uppercase;
                        }
                    }

                    
                }

                .send-message-container-details{
                    margin-top: 3rem;
                    #form{
                        label{
                            font-size: 1.3rem;
                            font-size: 1.8rem;
                        }
                        .name-email-container{
                            // display: flex;
                            // border: 2px solid;
                            margin-top: 3rem; 
                            // justify-content: space-between;
                        }
                        //STYLING THE INPUT AND TEXTAREA
                        textarea,input{
                            border: none;
                            background-color: transparent;
                            font-weight: $bold;
                            font-weight: 500;
                            font-size: 1.3rem;
                            font-size: 1.4rem;
                            margin: .9rem 0;
                            color: white;
                            font-family: inherit;
                            padding: .8rem .2rem;
                            border-bottom: 1px solid gainsboro;
                            //STYLING THE PLACEHOLDER
                            &::placeholder{
                                color: white;
                                opacity: .8;
                                font-size: 1.4rem;
                                font-weight: $regular;
                            }
                            &:focus{
                                outline: none;
                                transform: translateY(-.5rem);
                                border-bottom: 1px solid $body-color;
                            }
                        }
                        input{
                            width:100%;
                        }
                        textarea{
                            width: 100%;
                            // padding: .2rem;
                            
                        }
                        .button-container{
                            margin-top: 2rem;
                        }
                        button{
                            // margin-top: 3rem;
                            text-align: center;
                            color: white;
                            font-weight: $medium;
                            font-size: 1.4rem;
                            padding: .8rem 2rem;
                            width: 19rem;
                            background-color: transparent;
                            border: 1px solid rgb(39, 37, 37);
                            border: 1px solid gainsboro;
                            text-transform: uppercase;
                            cursor: pointer;
                            position: relative;
                           
                        }
                    }
                }
            }
        }
    }

    

    // CLASSES TO BE TOGGLED ARE HERE
    
    
    //CLASS TO BE TOGGLED TO THE ACTIVE SECTION NAV
    .main .navigate-div .navigate-buttons .nav-buttons-div.active-div {
        background-color: $body-color;
        transform: rotate(-180deg) scale(2);
        border-radius: unset;
    }
    
    body.hideOverflow{  //disabling scrolling when the h. button is clicked
        overflow: hidden;
        height: 100vh;
    }
    
    //TOGGLE THIS CLASS TO SHOW THE MENU LINKS
    .page-header .page-header-container .nav-bar .page-header-links.show-links{
        visibility: visible;
         opacity: 1;
        clip-path: inset(0 0 0 0);
    }
    
    

    
    @media screen and (max-width:922px) {
        //REDUCING SIZE OF IMAGE IN ABOUT SECTION
    me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container .about-me-image .image-container{
            height: 25rem;
            width: 25rem;
            .image{
                height: 25rem;
                max-width: 25rem;
            }
       
        }
    }
    
    
    @media screen and (max-width:840px) {
    
    
        .about-me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container{
            grid-template-columns: 1fr;
            
            .about-me-image{
                margin-top: 8rem;
                margin-bottom: 4rem;
                justify-content: center;
            }
            .about-me-info {
                padding-bottom: 10rem;
            }
        }

        .my-p-section .mps-wrapper .projects-container .project-div{
            height:30rem;
            width:28rem;
        }
    }
    
    //SHOWING THE HAMBURGER BUTTON
    @media screen and (max-width:690px) {
        .main{
            .social-links, .navigate-div{  //HIDE THE SOCIAL LINKS
                display: none;
            }
        }

        .top-page-section .top-page-content .top-page-content-container{
            .name h1{
                font-size:3.6rem;
            }
            .profession h1{
                font-size: 3.3rem;
            }
            .info p{
                font-size: 1.4rem;
            }
        }
        
        
        //PAGE HEADER
        .page-header{
            .page-header-container{
    
                .nav-bar{
    
                    .logo{
                        left: 5%;
                        // background-color: red;
                    }
    
                    .page-header-links{
                        opacity: 0;
                        visibility: hidden;
                        clip-path: inset(0 0 0 50%);
                        transition: all .6s cubic-bezier(0.33, 1, 0.68, 1);
                    

                        ul{
                            display: flex;
                            flex-direction: column;
                            justify-content: space-evenly;
    
                            li {
                                width: auto;

                                div{
                                    font-size: 1.4rem;
                                }
                                .menu-links-items-a{
                                    font-size: 2.4rem;
                                    opacity: unset;
                                    position: relative;
                                
                                    .to-be-hidden{
                                        display: hidden;
                                    }
                                }


          
         
                                #blog-small-cta{
                                    display: block;
                       
                                }
                                
                            } 
                        }
    
                        //HIDING THE LINE ON THE RIGHT SIDE OF THE LINKS
                        #line{
                            display: none;
                        }
                        
                    }
                    .menu-toggle{
                        display: block;
                    }
                }
            }
        }
    
        
    
        .send-message-section{
            
            .send-message-container{
                padding: 4rem;
            }
        }
        
    
        .about-me-section{
    
            .about-me-section-header-and-info{
            padding: unset;
            padding: 2rem;
            max-width: inherit;
            padding: 1rem;
    
            }
            
        } 
    
        .my-p-section .mps-wrapper .projects-container{

            .project-info .pdiv .pdiv-grid{
                grid-template-columns: 1fr;

                .pdiv-left img{
                    width: 20rem;
                    height: 20rem;
                }
            }
            .project-div{
                height:27rem;
                width:auto;
    
                .project-img{
                    height:20rem;
                }
                .project-name{
                    h2{
                        font-size: 1.4rem;
                    }
                }
            }

        }
        
        
        .send-message-section .send-message-container{
            grid-template-columns: 1fr;
            .ml-and-form {
                padding: .1rem;

                .menu-links ul li a{
                    font-size: 1.4rem;
                }
            }
        }

        
    
    }
    
    @media screen and (max-width:550px) {
        
        .top-page-section .top-page-content{
            width: 100%;
            .top-page-content-container{
                padding: 1rem;
            }
        }
        //REDUCING SIZE OF IMAGE IN ABOUT SECTION
        .about-me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container{

        .about-me-info{
            .about-me-info-paragraph{
                p{
                    font-size: 1.4rem;
                    
                    a{
                        font-size: 1.4rem;
                    }
                }

                ul li{
                    font-size: 1.3rem;

                }
            }
        }
        .about-me-image .image-container{
            height: 24rem;
            width: 24rem;
    
        .image{
            height: 24rem;
            max-width: 24rem;
        }
        }
    
        }

        .send-message-section .send-message-container{
            h1{
                font-size: 2.4rem;
            }
            p{
                font-size: 1.8rem;
            }
            .send-message-container-details #form .name-email-container{
            flex-direction: column;
    
            textarea, input{
                font-size: 1.4rem;
                width: 100%;

                &::placeholder{
                    font-size: 1.4rem;
                }
            }

        }

        } 
    
    
    }
    
    @media screen and (max-width:480px) {
    
        .top-page-section .top-page-content{

            width: 97%;
            .top-page-content-container{
                .name h1{
                    font-size: 3rem;
                }
                .profession h1{
                    font-size: 2.7rem;
                }
            }
        }

        
        .send-message-section 
        {
            height: auto;
            padding: 4rem 0;

            .send-message-container {
    
                p{
                    br{content:' ';}
                    br:after{content:' ';}
                }
            }
        }
    
        
    }
    
    @media screen and (max-width:400px){
        //REDUCING SIZE OF IMAGE IN ABOUT SECTION
        .about-me-section .about-me-section-header-and-info .about-me-flex-container .about-me-container .about-me-image .image-container{
            height: 22rem;
            width: 22rem;
    
            .image{
                height: 22rem;
                max-width: 22rem;
            }
    
        }
    }
    
    
    
    
    </style>
    
    
