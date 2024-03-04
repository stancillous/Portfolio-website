<template>

        <section id="send-message-section-id" class="send-message-section section">
            <div class="send-message-container">

                <div class="headers">
                    <h1 class="section-title">contact</h1>
                    <!-- <h1 id="sendMessageHeader">say hi.</h1> -->

                </div>
               <!-- <p id="sendMessageText"> Have any inquiries or ideas to share, or just want to drop a friendly greeting? Go ahead.</p> -->

               <div class="ml-and-form">

                   <div class="menu-links">
                        <div class="menu">
                            <ul>
                                <li><a data-scroll-to href="#top-page-section-id">Home</a></li>
                                <li><a data-scroll-to href="#about-section-id">about</a></li>
                                <li><a data-scroll-to href="#features-section-id">services</a></li>
                                <li><a data-scroll-to href="mailto:stancillousray@gmail.com">email</a></li>
                            </ul>
                        </div>
                        <div class="links">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/stancillous/">linkedin</a></li>
                                <li><a href="https://github.com/stancillous">github</a></li>
                                <li><a href="https://www.instagram.com/stancillous">instagram</a></li>
                                <li><a href="https://wa.me/+254795494587">whatsapp</a></li>
                            </ul>
                        </div>
                   </div>
    
                    <div class="send-message-container-details">
                        <form action="https://formspree.io/f/xknerajz" name="site_form" method="POST" data-netlify="true" id="form">
    
                            <div class="name-email-container">
                                
                                <input name="name" required autocomplete="off" class="sendMessageSectionInputs" placeholder="Name" type="text" id="name"> <br>
            
                                <input name="email" required autocomplete="off" class="sendMessageSectionInputs" placeholder="Email" type="email" id="email"> <br>
                       
                            </div>
    
                            <label for="message"></label><br>
                            <textarea name="message" required class="sendMessageSectionInputs" placeholder="Message"  id="message" cols="40" rows="2"></textarea> <br>
                            
                            <div class="button-container">
                                
                                <button type="submit" id="submitButton"><div id="animatingSubmitButton"></div>launch</button>
    
                            </div>
    
    
    
                        </form>
    
    
    
                    </div>
               </div>
            </div>
        </section>
       
</template>

<script>
    export default {
        name:'contactComp'
        
    }
</script>

<style lang="scss" scoped>

</style>