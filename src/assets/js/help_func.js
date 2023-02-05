export const HOST_URL = ()=> {
  if (process.env.NODE_ENV === "development") {
      return "http://127.0.0.1:8000"
  }
  else{
      return "https://api.instincthub.com"
  }
}

export const SK_KEY = process.env.REACT_APP_SK_KEY
export const SK_VALUE = process.env.REACT_APP_SK_VALUE


  export const checkUrl = (string)=> {
    let givenURL ;
    try {
        givenURL = new URL (string);
    } catch (error) {
        console.log ("error is", error);
       return false; 
    }
    return true;
  }
  
  export const cookiesEnabled = () =>{
    var i, j, cookies, found;
    if (navigator.cookieEnabled===false) return 0;
    document.cookie = 'testcookiesenabled=1';
    for (i=0; i<2; i++) {
        found = false;
        cookies = document.cookie.split(';');
        j = cookies.length;
        while(j--) {
            while (cookies[j].charAt(0)===' ') {// trim spaces
                cookies[j] = cookies[j].substring(1);
            }
            if (cookies[j].indexOf('testcookiesenabled=')===0) {
                found = true;
                break;
            }
        }
        if (!found) {
            return i;
        }
        // Delete test cookie.
        document.cookie = 'testcookiesenabled=; expires=Thu, 01 Jan 1970 00:00:01 GMT';
    }
    // Results inconclusive.
  }
  
  export const faqTag = (e) =>{
    // Hide other elements and change the icon button.
    const hideTag = () =>{
        document.querySelectorAll('.faq').forEach(item =>{
            item.classList.remove('open')
            item.children[1].innerHTML = '&#43;';
        })
    }
  
    // Toggle targeted element to show with the forEach loop
    
   if (e.target.classList.contains('faq')) {
        hideTag()
        e.target.classList.toggle('open')
        e.target.querySelector('.btn').innerHTML = '&#8722;'
   }
    else if (e.target.className === 'btn') {
        hideTag()
        e.target.parentElement.classList.toggle('open')
        e.target.innerHTML = '&#8722;'
    }
    else if (e.target.tagName === 'H3') {
        hideTag()
        e.target.parentElement.parentElement.classList.toggle('open')
        e.target.querySelector('.btn').innerHTML = '&#8722;'
    }
  }
  
  export const cookiesRequired = (tag) =>{
    if (cookiesEnabled() === 0) {
      document.getElementById('root').innerHTML = `
      <div 
          id="faq"
          class="faq_main container" 
          itemScope itemType="https://helpcenter.trendmicro.com/en-us/article/tmka-18108">
          <div class="faq_wrap">
            <div  class="p_reviews">
                <h2 itemProp="title" class='t-left'>We use cookies</h2>
            </div>
            <p>Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies.</p>
            <p>Use the descriptions below to enable your cookies. <strong>Refresh this page when you are done!</strong> It should load the right content.</p>
  
              
            <div class="faq">
              <div class="faq_text">
                <h3>Enable website cookies and JavaScript in <strong>Google Chrome</strong></h3>
                <ol>
                  <li>Open <strong>Google Chrome.</strong></li>
                  <li>On the upper right corner, click the <strong>Menu button ⋮</strong>, then choose Settings.</li>
                  <li>Under <strong>Privacy and security</strong>, click <strong>Site Settings</strong>.</li>
                  <p>- Scroll down until you see the <strong>Content</strong> section.</p>
                  <p>- Select <strong>Cookies and other site data</strong>, then choose <strong>Allow all cookies.</strong></p>
                  <p>- Select <strong>JavaScript</strong>, then choose <strong>Sites can use Javascript.</strong></p>
                </ol>
              </div>
              <span class="btn">&#43;</span>
            </div>
  
            <div class="faq">
              <div class="faq_text">
                <h3>Enable website cookies and JavaScript in <strong>Microsoft Edge</strong></h3>
                <ol>
                  <li>Open <strong>Microsoft Edge</strong>.</li>
                  <li>At the top right corner, click <strong>Settings and more</strong> , then choose <strong>Settings</strong>.</li>
                  <li>Select <strong>Cookies and site permissions</strong>.</li>
                  <p>- Click <strong>Manage and delete cookies and site data</strong>, then turn ON <strong>Allow sites to save and read cookie data (recommended)</strong>.</p>
                  <p>- Select Cookies and other site data, then choose Allow all cookies.</p>
                  <p>- Select <strong>JavaScript</strong> under <strong>Site permissions</strong>, then turn ON  <strong>Allowed (recommended)</strong>.</p>
                </ol>
              </div>
              <span class="btn">&#43;</span>
            </div>
  
            <div class="faq">
              <div class="faq_text">
                <h3>Enable website cookies and JavaScript in <strong>Mozilla Firefox</strong></h3>
                <ol>
                <strong>Note:</strong> By default, Javascript is automatically enabled in Firefox.
                  <li>Open <strong>Mozilla Firefox</strong>.</li>
                  <li>At the upper right, click the <strong>Menu button ☰</strong>, then select <strong>Settings</strong>.</li>
                  <li>Select <strong>Privacy & Security</strong>, then choose <strong>Standard</strong> under <strong>Browser Privacy</strong>.</li>
                </ol>
              </div>
              <span class="btn">&#43;</span>
            </div>
  
            <div class="faq">
              <div class="faq_text">
                <h3>Enable website cookies and JavaScript in Apple <strong>Safari</strong></h3>
                <ol>
                  <li>Open <strong>Safari</strong>.</li>
                  <li>At the upper left, click the <strong>Safari</strong> menu, then select <strong>Preferences</strong>.</li>
                  <p>- Select the Privacy tab, then choose <strong>Never</strong> under <strong>Block cookies</strong>.</p>
                  <p>- Select the <strong>Security</strong> tab, then check <strong>Enable JavaScript</strong> under <strong>Web content</strong>.</p>
                </ol>
              </div>
              <span class="btn">&#43;</span>
            </div>
  
            <p class='mt-3'>Need additional help? chat with us via</p>
            <a href="https://wa.me/message/5IA2QYCI53SUM1" target="_blank" rel="noreferrer">
              <button class="d-inline-block important-btn">
                <span>WhatsApp</span>
              </button>
            </a>
          </div>
      </div>
      `
      const faq = document.getElementById('faq')
      if (faq) {
        faq.addEventListener('click', (e)=>{
          faqTag(e)
        })
      }
    }
    
    
  }
  
  export const getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (Number(c.indexOf(name)) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }
  
  export const removeCookie = (cname) => {
    const d = new Date('12-02-2011'); // backdate
    document.cookie = cname + "=;" + HOST_URL + d;
  }
  
  export const setCookie = (cname, cvalue, exdays) => {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      // console.log(`${cname}=${cvalue}; cookies was created`)
  
  }
  // setCookie('test3', 'stest', 29)
  // console.log(getCookie('test3'))
  // removeCookie('test3', -10)
  // console.log(getCookie('u_id'))
  
  // Page hero background
  export const PageHeroBanner = (tag_id, img) =>{
    const tag = document.getElementById(tag_id)
    tag.style.backgroundImage = `url(${img})`
    tag.style.height = '200px'
    tag.style.maxWidth = '100%'
    tag.style.width = '100%'
    tag.style.marginTop = '85px'
    tag.style.marginBottom = '40px'
    tag.style.backgroundSize = 'cover'
  }
  
  export const printInputError = (items) =>{
    let inputField
    const eachInput = (key, value, index) =>{
        console.log(key, value)
        inputField = document.querySelector('form').querySelector(`[name="${key}"]`)
        
    
        let error_tag = null
    
        // Make input border red and check for the parent tag
        if (inputField !== null) {
            inputField.style.borderColor = 'var(--TurkishRose)';
    
            if (inputField.getAttribute('type') === 'radio'){
                error_tag = inputField.parentElement.parentElement.parentElement.querySelector('.error');
            }
            else if (inputField.getAttribute('type') === 'file'){
            error_tag = inputField.parentElement.parentElement.querySelector('.error'); 
            }
            else{
            error_tag = inputField.parentElement.querySelector('.error');
            }
        }
    
        if (error_tag) {
            error_tag.textContent = value
        }
        else{
            let span_tag = document.createElement('P')
            span_tag.classList.add('error')
            span_tag.textContent = value
            span_tag.style.color = 'var(--TurkishRose)'
            span_tag.style.display = 'block'
            
            if (key === "user") {
            
            }
            else if (inputField !== null){
            // console.log(inputField.parentElement)
            if (inputField.getAttribute('type') === "radio" || inputField.classList.contains('dropdown')) {
                // console.log(key)
                inputField.parentElement.parentElement.parentElement.append(span_tag)
            }
            else if(inputField.getAttribute('type') === "checkbox"){
                inputField.parentElement.parentElement.parentElement.parentElement.append(span_tag)
            }
            else if (inputField.getAttribute('type') === "file") {
                // console.log(key)
                inputField.parentElement.parentElement.append(span_tag)
            }
            else if (inputField.nodeName === "SELECT") {
                console.log(key)
                inputField.parentElement.append(span_tag)
            }
            else{
                inputField.parentElement.parentElement.append(span_tag)
            }
            }
            
        }
        if (index === 0 && inputField !== null) {
            inputField.focused = true
        }
    }

    Object.entries(items).forEach((item, index)=> {
        const [key, value] = item;
        eachInput(key, value, index)
    });
      
  }
  
  // Prefill user input 
  export const prefillInput = (items) =>{
    Object.entries(items).forEach((item, index)=> {
      const [key, value] = item;
  
      let inputField = document.querySelector('#regForm').querySelectorAll(`[name="${key}"]`)
  
      // Target regular fields
      if (inputField[0] && value) {
        inputField[0].value = value
      }
  
      // Target radio button type 
      if (inputField.length !== 0) {
        if (inputField[0].getAttribute('type') === 'radio') {
          inputField.forEach(i =>{
            if (i.value === value || (i.value === 'true' ? true : false) === value) {
              i.checked = true
            }
          })
        }
      }
    });
  }
  
  // Set type to null if not required. 
  export const reqOptions = (method, data, bearer=null) =>{

    let myHeaders =  {
      'X-CSRFToken': getCookie('CSRF-TOKEN'),
      'Origin': window.location.origin
    }
    myHeaders[SK_KEY] = SK_VALUE

    if (bearer)  myHeaders["Authorization"] = "Bearer "+getCookie('access');
    
    var request = {
      method: method,
      headers: myHeaders,
      body: data,
      redirect: 'follow'
    };
    return request
  }
  
  export const fetchAPI = (session, api, reqOptions, func=false, setStatus=false, setError=false) =>{
  
      let status = null
      fetch(api, reqOptions)
      .then(res => {
          status=res.status; 
          return res.json()
      })
      .then(
          (result) => {
              if (func === false) { // if class component
                  session.setState({
                      data: result,
                      status: status
                  })
              }else if (func === true){// if function component
                if(setError) setError(result);
                if(setStatus) setStatus(status) // Display message banner. 
                session(result);
              }
              
              if (process.env.NODE_ENV === "development") {
                console.log(result)
                console.log(status)
              }
              
              return result
          },
          (error) => {
              if (func === false) {
                  session.setState({
                      error: error
                  })
              }
              else{
                //   session(error)
                  
              }
              console.log(error.message)
              return error.message
          }
      )
  }
  
  export const fetchLeadAPI = (setData, url, body=null, method='GET')=> {
    var myHeaders = new Headers();
    myHeaders.append("leadboard-sk-header", "22-072021kidbackendyste3333ifkIks304");
    myHeaders.append("Cookie", "csrftoken=Wvp0BGFhKnTktgYmKaxrXBdyCWPRt6V8cDxNhJRbLZCIHhqx8hzHM4Z3ZxhF52HM; sessionid=evwh71c9a72wqt1bbdd3h1qo5phap8a7");
  
    // if(body) {
    //   myHeaders.append('Content-Type', 'application/json');
    //   myHeaders.append('Accept', 'application/json');
    // }
    var requestOptions = {
      method: method,
      headers: myHeaders,
      redirect: 'follow'
    };

    if(body) {
      requestOptions['body'] = body;
    }
  
  
    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => setData(JSON.parse(result)))
      .catch(error => console.log('error', error));
   
  } 

  export const checkEnv = ()=> {
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname === "192.168.0.174" || window.location.hostname === "") {
          return "local"
      }
      else{
          return "production"
      }
  }
  
  export const spinBtn = (form, display, status) =>{
      form.querySelector('button.submit_bt').disabled = status; // this disable the button
      form.disabled = status; // This disables the whole form via the fieldset
      form.querySelector('button .bt-spinner').style.display = display;
  }
  

  // Previous Blog Slug before changing to React Frontend
  export const previousBlogSlug = [
    'instincthub-2022-snapshot', 'the-future-ai-with-chatgpt-a-closer-look', 'employee-digital-skills-transition-the-role-of-employers', 'why-choose-to-code-it-over-automated-apps', 'how-to-use-an-api', 'otp-one-time-passcode-authentication', 'cyber-security-threats-and-controls', 'owasp-top-10-serious-application-vulnerabilities', 'cybersecurity-incidents-and-how-to-avoid-them', 'website-security-checklists-for-your-product', 'leadership-roles-in-technology', 'social-engineering', 'why-did-david-get-stabbed', 'harmonising-your-thoughts-and-emotions', 'living-beyond-emotions', 'impact-of-technology-on-economic-development', 'the-outrageous-benefits-of-21st-century-internet', 'call-for-campus-lead', '5-ways-to-make-learning-fun', 'call-for-mentors-and-community-support', 'taking-the-big-steps-achieving-your-true-goal', 'http-vs-https', 'the-tech-academy-debut-experience', '4-ways-to-use-technology-in-growing-businesses', 'why-we-need-to-separate-work-and-personal-life', 'physical-security', 'cloud-computing-the-future-of-digital-devices', 'password-authentication-vs-passwordless-authentication', 'how-inconsistency-can-ruin-ones-career', 'tech-diversity-in-nigeria-2022', '100-percent-productivity-4-most-useful-time-management-tips', 'starlink-in-nigeria-150-500-mbps-download-speeds', 'the-fight-between-designers-and-software-engineers', 'how-to-think-like-a-programmer', 'how-to-create-circle-with-html-and-css', 'employment-problem-why-do-people-remain-jobless', 'how-can-software-developers-work-with-designers-and-product-managers-seamlessly', 'coding-vs-programming-the-unique-differences', 'how-we-exchange-professionalism-for-sofa-the-cost-of-remote-work', 'how-to-rename-a-model-in-django-without-loosing-data', 'how-to-configure-cors-in-django-communication-with-multiple-applications', 'how-to-create-a-startup', 'costly-mistakes-you-should-avoid-in-programming', 'how-to-become-a-first-class-data-scientist-best-advice', 'why-i-quit-learning-javascript', 'how-apis-works-the-emerging-tech-crude-oil', '12-common-phrases-you-should-know-in-programming', '30-days-with-python', 'how-to-overcome-depression-and-emotional-breakdown', 'instincthub-apologise-for-multiple-email-interruption', 'how-your-brain-react-to-emotions-amygdala-frontal-lobes', 'thank-you-2021-sponsors-and-supporters', '6-rules-for-naming-variables-in-programming', 'why-is-javascript-so-powerful-that-you-cant-run-from-it', 'how-i-learned-technology-skills-without-a-laptop', 'even-and-odd-number-algorithm-in-python-programming-language', 'why-your-developer-would-leave-your-business-without-thinking-about-it', 'flubot-the-virus-every-android-user-should-watch-out-for', 'weekly-digest-flubot', 'Stealing-sensitive-online-information-modern-day-trend', '2021-tech-diversity-in-nigeria-finalist', 'Emerging-Technologies', 'how-to-create-a-unique-and-positive-digital-footprints', 'Types-of-Currencies-The-Emerging-eNaira', 'learning-management-system-v130', 'Tech-Diversity-In-Nigeria-2021-Documentary', 'how-become-logic-guru-programming', '3-most-costly-mistakes-we-often-make-life', '5-ways-earn-money-while-learning-code', 'introducing-students-scoreboard', 'you-have-want-be-organised', 'hidden-secrets-every-business-owner-should-know-about-social-media', 'how-get-things-done-ease', 'automation-mindset-solving-problems-codes', '2021-tech-diversity-in-nigeria', '6-unbroken-reasons-why-every-web-developer-need-learn-javascript', '12-solid-reasons-why-you-should-choose-digital-marketing-career', 'how-change-navbar-background-color-scroll', 'web-development-teacher', 'get-step-step-guideline-and-earn-yourself-job-opportunities', '5-python-tricks-will-make-you-code-faster-and-easier', '15-digital-marketing-terminologies-beginners-2021', 'nigerian-university-students-skills-assessment-report-2020', 'gift-someone-a-digital-skill', '5-w-questions-if-you-cannot-answer-them-forget-learning-new-skills', '6-digital-marketing-skills-will-get-you-high-paying-job', '4-ways-create-effective-ui-ux-design', 'telco-ban-what-it-means-and-how-stay-connected', '2020-most-active-trainees', 'be-an-amateur-the-spirit-love', 'instincthub-learning-management-system-lms', '5-html-tags-you-should-use-often', 'student-achievement-gap-initiative', '3-ways-learn-new-skills-full-time-job', 'developers-and-programmers-salary-nigeria', '5-steps-start-career-tech', 'what-ux-design-all-you-need-know-about-user-experience-design-5-minutes', 'html-and-css-refresher-web-design-basic-concept', 'starting-career-user-experience-ux-design', '4-things-you-need-getting-started-javascript-access-and-modify-html-css-webpage', '7-tips-make-you-good-programming', 'need-urgent-national-flood-and-natural-disaster-management-response-roundtable', '5-ways-effective-time-management-without-social-media-distractions', 'paying-attention-details', 'choosing-from-the-pool-of-digital-career', 'how-technology-changed-way-we-live', 'impact-technology-business'
  ]
  // var country_list = ;
  
  export const customData = {
      universities: [
          "Abia State University",
          "Abubakar Tafawa Balewa University",
          "Achievers University, Owo",
          "Adamawa State University",
          "Adekunle Ajasin University",
          "Adeleke University",
          "Admiralty University of Nigeria",
          "Afe Babalola University",
          "African University of Science and Technology",
          "Ahmadu Bello University",
          "Ajayi Crowther University",
          "Akwa Ibom State University",
          "Alex Ekwueme Federal University, Ndufu-Alike",
          "Al-Hikmah University",
          "Al-Qalam University, Katsina",
          "Ambrose Alli University",
          "American University of Nigeria",
          "Anchor University, Lagos",
          "Arthur Jarvis University",
          "Atiba University",
          "Augustine University",
          "Babcock University",
          "Bauchi State University",
          "Bayero University Kano",
          "Baze University",
          "Bells University of Technology",
          "Benson Idahosa University",
          "Benue State University",
          "Bingham University",
          "Borno State University",
          "Bowen University",
          "Caleb University",
          "Caritas University",
          "Chrisland University",
          "Christopher University",
          "Chukwuemeka Odumegwu Ojukwu University",
          "Clifford University",
          "Coal City University",
          "Covenant University",
          "Crawford University",
          "Crown Hill University",
          "Delta State University, Abraka",
          "Dominican University, Ibadan",
          "Eastern Palm University",
          "Ebonyi State University",
          "Edo University",
          "Edwin Clark University",
          "Ekiti State University, Ado Ekiti",
          "Eko University of Medical and Health Sciences",
          "Elizade University",
          "Enugu State University of Science and Technology",
          "Evangel University, Akaeze",
          "Federal University of Agriculture, Abeokuta",
          "Federal University of Petroleum Resources",
          "Federal University of Technology, Akure",
          "Federal University of Technology, Minna",
          "Federal University of Technology, Owerri",
          "Federal University, Birnin Kebbi",
          "Federal University, Dutse",
          "Federal University, Dutsin-Ma",
          "Federal University, Gashua",
          "Federal University, Gusau",
          "Federal University, Kashere",
          "Federal University, Lafia",
          "Federal University, Lokoja",
          "Federal University, Otuoke",
          "Federal University, Oye-Ekiti",
          "Federal University, Wukari",
          "Fountain University, Osogbo",
          "Glorious Vision University",
          "Godfrey Okoye University",
          "Gombe State University",
          "Gombe State University of Science and Technology",
          "Gregory University, Uturu",
          "Hallmark University, Ijebu-Itele",
          "Hezekiah University",
          "Ibrahim Badamasi Babangida University",
          "Igbinedion University Okada",
          "Ignatius Ajuru University of Education",
          "Imo State University",
          "Joseph Ayo Babalola University",
          "Kaduna State University",
          "Kano University of Science and Technology",
          "Kebbi State University of Science and Technology",
          "Kings University",
          "Kola Daisi University",
          "Kwara State University",
          "Kwararafa University, Wukari",
          "Ladoke Akintola University of Technology",
          "Lagos State University",
          "Landmark University",
          "Lead City University",
          "Legacy University, Okija",
          "Madonna University, Nigeria",
          "Mcpherson University",
          "Michael and Cecilia Ibru University",
          "Michael Okpara University of Agriculture",
          "Modibbo Adama University of Technology",
          "Moshood Abiola University of Science and Technology, Abeokuta",
          "Mountain Top University",
          "Nasarawa State University",
          "Niger Delta University",
          "Nigerian Maritime University, Okerenkoko",
          "Nile University of Nigeria",
          "Nnamdi Azikiwe University",
          "Novena University",
          "Obafemi Awolowo University",
          "Obong University",
          "Oduduwa University",
          "Olabisi Onabanjo University",
          "Ondo State University of Science and Technology",
          "Osun State University",
          "PAMO University of Medical Sciences",
          "Pan-Atlantic University",
          "Paul University",
          "Plateau State University",
          "Precious Cornerstone University",
          "Redeemer's University",
          "Renaissance University",
          "Rhema University",
          "Ritman University",
          "Rivers State University",
          "Salem University",
          "Skyline University Nigeria",
          "Sokoto State University",
          "Southwestern University, Nigeria",
          "Spiritan University, Nneochi",
          "Sule Lamido University",
          "Summit University Offa",
          "Taraba State University",
          "The Technical University",
          "Umaru Musa Yar'Adua University",
          "University of Abuja",
          "University of Africa",
          "University of Agriculture, Makurdi",
          "University of Benin",
          "University of Calabar",
          "University of Ibadan",
          "University of Ilorin",
          "University of Jos",
          "University of Lagos",
          "University of Maiduguri",
          "University of Medical Sciences",
          "University of Mkar",
          "University of Nigeria",
          "University of Port Harcourt",
          "University of Uyo",
          "Usmanu Danfodio University",
          "Veritas University",
          "Wellspring University",
          "Wesley University of Science and Technology",
          "Western Delta University",
          "Yobe State University",
          "Yusuf Maitama Sule University Kano",
          "Zamfara State University",
        ],
      courses:[
          "Agricultural economics",
          "Agricultural Economics/Extension",
          "Agricultural Education",
          "Agricultural Education",
          "Agricultural Engineering",
          "Agricultural Extention",
          "Agricultural Science",
          "Agronomy",
          "Animal Production",
          "Animal Science",
          "Crop Production",
          "Crop Science",
          "Family, Nutrition And Consumer Sciences",
          "Fisheries",
          "Food Science and Technology",
          "Forestry",
          "Plant Science",
          "Soil Science",
          "Water Resources Management And Agrometerorology",
          "Automobile Engineering",
          "Biomedical Engineering",
          "Chemical Engineering",
          "Civil Engineering",
          "Computer Engineering",
          "Electrical Engineering",
          "Engineering Physics",
          "Food Science and Engineering",
          "Industrial and Production Engineering",
          "Information Communication Engineering",
          "Mechanical Engineering",
          "Mechatronics Engineering",
          "Metallurgical Engineering",
          "Water Resources and Environmental Engineering",
          "Software Engineering",
          "System Engineering",
          "Petroleum Engineering",
          "Anatomy",
          "Biochemistry",
          "Human Nutrition and Dietetics",
          "Medical Laboratory Technology/Science",
          "Medicine & Surgery",
          "Nursing",
          "Optometry",
          "Radiography",
          "Pharmacy",
          "Physiology",
          "Public Health Technology",
          "Veterinary medicine",
          "Accounting",
          "Arabic",
          "Banking and Finance",
          "Business Administration",
          "Communication Arts",
          "Crimnology and Security Studies",
          "curriculum studies",
          "Demography and Social Statistics",
          "Economics",
          "English Language",
          "Entrepreneurship",
          "Fine Arts",
          "French",
          "Hausa",
          "History",
          "Home Economics",
          "Hospitality and Tourism Management",
          "Human Resource Management",
          "Igbo",
          "Insurance",
          "International Relations",
          "Islamic Studies",
          "Linguistics",
          "Marketing",
          "Mass Communication",
          "Media and Communication Studies",
          "Music",
          "Peace and Conflict Resolution",
          "Performing Arts",
          "Philosophy",
          "Political Science",
          "project management",
          "Psychology",
          "Public Administration",
          "Religious Studies",
          "Social Works",
          "Sociology",
          "Taxation",
          "Tourisim Studies",
          "Theology",
          "Yoruba",
          "Architecture",
          "Biochemistry",
          "Bio-Infomatics",
          "Biology",
          "Botany",
          "Building Technology",
          "Computer Science",
          "Cyber security Science",
          "Estate Management",
          "Chemistry",
          "Geography",
          "Geophysics",
          "Geology",
          "Human Nutrition and Dietetics",
          "Information Resource Management",
          "Information Systems",
          "Information Technology",
          "Library and Information Science",
          "Management Information System",
          "Mathematics",
          "MicroBiology",
          "Physics",
          "Plant Science",
          "statistics",
          "Urban and Regional Planning",
          "Veterinary medicine",
          "Zoology",
          "Adult Education",
          "Agricultural Education",
          "Business Education",
          "Counsellor Education",
          "Early Childhood Education",
          "Education Administration",
          "Education & Accounting",
          "Education & Arabic",
          "Education & Biology",
          "Education & Business Administration",
          "Education & Chemistry",
          "Education & Computer Science",
          "Education & Christian Religious Studies",
          "Education & Economics",
          "Education & Fine Art",
          "Education & English Language",
          "Education & French",
          "Education & Geography",
          "Education & Geography/physics",
          "Education & History",
          "Education & Integrated Science",
          "Education & Introductory Technology",
          "Education & Islamic Studies",
          "Education & mathematics",
          "Education & Music",
          "Education & Physics",
          "Education & Political Science",
          "Education & Religious Studies",
          "Education & Social Studies",
          "Education Arts",
          "Education Foundation",
          "Environmental Education",
          "Guidance and Counselling",
          "Health Education",
          "Vocational Education",
          "Special Education",
          "Law",
          "Civil Law",
          "Sharia/Islamic Law",
          "Private Law",
          "Public Law",
          "Commercial Law",
          "International Law & Jurisprudence"
      ],
      "faculties":[
          "Agriculture",
          "Engineering",
          "Medicine & Pharmacy",
          "Arts, Management & Social Science",
          "Science & Technology",
          "Education",
          "Law"
      ],
      "country_list":["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"]
  }