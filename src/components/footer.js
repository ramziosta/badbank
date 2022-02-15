import './footer.css'
export default function Footer() {
  return (
    <>
        <div class="footer-gray">
    <div class="footer-custom">
      <div class="footer-lists">
        <div class="footer-list-wrap">
          <h6 class="ftr-hdr">Toll Free</h6>
          <ul class="ftr-links-sub">
            <li>800-867-5309</li>
          </ul>
          <h6 class="ftr-hdr">International</h6>
          <ul class="ftr-links-sub">
            <li><a href="http://www.ramziosta.com" rel="nofollow">France</a></li>
            <li><a href="https://www.ramziosta.com" rel="nofollow">United Kingdom</a></li>
          </ul>
        </div>
     
        <div class="footer-list-wrap">
          <h6 class="ftr-hdr">Customer Service</h6>
          <ul class="ftr-links-sub">
            <li><a href="/#" rel="nofollow">Contact Us</a></li>
            <li><a href="/#" rel="nofollow">Careers</a></li>
            <li><a href="/#" rel="nofollow">Credit Cards &amp; Electronic Payments</a></li>
            <li><a href="/#" rel="nofollow">Privacy</a></li>
            <li><a href="/#" rel="nofollow">International Accounts</a></li>
            <li><a href="/~/egift-cards/" rel="nofollow">Security</a></li>
            <li><a href="/help/faq.html" rel="nofollow">FAQs</a></li>
          </ul>
        </div>
        <div class="footer-list-wrap">
          <h6 class="ftr-hdr">About ramziosta.com</h6>
          <ul class="ftr-links-sub">
            <li><a href="www.ramziosta.com" rel="nofollow">About Me</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Locations</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Portfolio</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Business &amp; Trade Sales</a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Affiliate Program</a></li>
            <li><a href="mailto:ramziosta@gmail.com" rel="nofollow"><strong>Hire Me</strong></a></li>
            <li><a href="http://ramziosta.com" rel="nofollow">Ramzi Osta</a></li>
          </ul>
        </div>
       
        <div class="footer-list-wrap">
          <h6 class="ftr-hdr">My Account</h6>
          <ul class="ftr-links-sub">
            <div rule="!loggedin">
              <li class="ftr-Login"><span class="link login-trigger">Access My Account</span></li>
              <li><span class="link" onclick="link('/asp/secure/your_account/track_orders-asp/_/posters.htm')">Application Status</span></li>
            </div>
            <div rule="loggedin">
              <li class="ftr-Login"><span class="link ftr-access-my-account">Create New Account</span></li>
              <li><span class="link" onclick="window.location.href = getProfileKey() + '?pagetype=oh';">Tradings</span></li>
            </div>
          </ul>
        </div>
     
      </div>

      <div class="footer-email">
        <h6 class="ftr-hdr">Sign up for exclusive offers </h6>
        <div id="ftr-email" class="ftr-email-form" style={{marginTop:"1rem"}}>
          <form id="ftrEmailForm" method="post" action="http://ramziosta.com">
            <div class="error">Please enter a valid email address</div>
            <input type="text" name="email_address_" id="ftrEmailInput" class="input" placeholder="Enter email address" />
          
            <input type="submit" class="button" value="SUBMIT" />
            <input type="hidden" name="country_iso2" value="" />
            <input type="hidden" name="language_iso2" value="en" />
            <input type="hidden" name="site_domain" value="http://ramziosta.com" />
            <input type="hidden" name="email_acq_source" value="01-000001" />
            <input type="hidden" name="email_acq_date" value="" id="ftr-email-date" />
            <input type="hidden" name="brand_id" value="http://ramziosta.com" />
            <input type="hidden" name="_ri_" value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk" />
          </form>
        </div>
  
        <div class="ftr-email-privacy-policy"></div>
      </div>
  
      <div class="footer-social">
        <h6 class="ftr-hdr">Follow Us</h6>
        <ul>
          <li>
            <a href="https://www.facebook.com/ramseyosta" title="Facebook" onclick="_gaq.push(['_trackSocial', 'Facebook', 'Follow', 'Footer', 'undefined', 'True']);">
              <img width="24" height="24" alt="Like us on Facebook" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/fb.png" />
            </a>
          </li>
          <li>
            <a href="mailto:ramziosta@gmail.com" title="Google+" onclick="_gaq.push(['_trackSocial', 'GooglePlus', 'Follow', 'Footer', 'undefined', 'True']);">
              <img width="24" height="24" alt="Follow us on Google+" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/gplus.png" />
            </a>
          </li>
          <li>
            <a href="http://ramziosta.com" target="_blank">
              <img width="24" height="24" alt="Follow us on Pinterest" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/pin-badge.png" />
            </a>
          </li>
          <li>
            <a target="_blank" href="http://instagram.com/ramziosta/">
              <img width="24" height="24" alt="Follow us on Instagram" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/instagram-badge.png" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/ostaramzi" title="Twitter" onclick="_gaq.push(['_trackSocial', 'Twitter', 'Follow', 'Footer', 'undefined', 'True']);">
              <img width="67" alt="Follow us on Twitter" src="http://cache1.artprintimages.com/images/jump_pages/rebrand/footer/twitter.png" />
            </a>
          </li>
        </ul>
      </div>

      <div class="footer-legal">
        <p>&copy; Ramzi Osta. All Rights Reserved. | <a href="/help/privacy-policy.html" rel="nofollow">Privacy Policy</a> | <a href="/help/terms-of-use.html" rel="nofollow">Terms of Use</a> | <a href="/help/terms-of-sale.html" rel="nofollow">Terms of Sale</a></p>
        <p>Ramzi Osta trademarks or registered trademarks of Ramzi Osta.</p>
        <p>Various aspects of this website are covered by issued US patent No. 7,973,796 and other pending patent applications.</p>
        <p>Equal Housing Lender</p>
      </div>
     
      <div class="footer-payment">
        <ul>
          <li class="ftr-stella">
            <span title="Stella Service" onclick="openLink('http://www.stellaservice.com/profile/Art.com/')"></span>
          </li>
          <li>
            <span onclick="clickTrack(); return false;" onmouseover="this.style.cursor='pointer'"><img border="0" alt="HACKER SAFE certified sites prevent over 99.9% of hacker crime." src="https://images.scanalert.com/meter/www.art.com/31.gif" /></span>
          </li>
          <li class="ftr-bbb">
            <span title="BBB" onclick="openLink('http://www.bbb.org/raleigh-durham/business-reviews/art-suppliers/artcom-inc-in-raleigh-nc-5001914')"></span>
          </li>
        </ul>
      </div>
 
    </div>
  
  </div>

    </>
  );
}
