// JavaScript to toggle visibility of sections when clicking the links
document.getElementById("homeLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    toggleSection('mainContent'); // Toggle 'mainContent' section visibility
});

document.getElementById("aboutLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    toggleSection('aboutContent'); // Toggle 'aboutContent' section visibility
});

document.getElementById("offersLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default anchor link behavior
    toggleSection('offersContent'); // Toggle 'offersContent' section visibility
});

// Function to toggle visibility of a section
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    // If the section is already visible, hide it, else show it
    if (section.style.display === 'block') {
        section.style.display = 'none'; // Hide the section
    } else {
        // First, hide all sections
        const sections = document.querySelectorAll('#mainContent, #aboutContent, #offersContent');
        sections.forEach(sec => sec.style.display = 'none'); // Hide all sections

        // Then, show the clicked section
        section.style.display = 'block'; // Show the clicked section
    }
}

// Function to switch language between English and Arabic
function switchLanguage() {
    const currentLang = document.documentElement.lang;

    if (currentLang === 'en') {
        document.documentElement.lang = 'ar'; // Change language to Arabic
    } else {
        document.documentElement.lang = 'en'; // Change language to English
    }

    updateContent();
}

// Function to update the content based on language
function updateContent() {
    const lang = document.documentElement.lang;
    
    // Update header and navbar links based on language
    const greeting = document.querySelector('h1');
    const navLinks = document.querySelectorAll('.nav_links a');
    const menuBars = document.querySelectorAll('.menu-bar p');
    const sectionButtons = document.querySelectorAll('.menu-bar button');

    // Translate the greeting text
    if (lang === 'ar') {
        greeting.textContent = 'مرحبًا بكم في الموقع'; // Arabic greeting
    } else {
        greeting.textContent = 'Welcome to the Website'; // English greeting
    }

    // Translate navbar links text based on language
    if (lang === 'ar') {
        navLinks[0].textContent = 'الصفحة الرئيسية';  // Home in Arabic
        navLinks[1].textContent = 'من نحن';          // About Us in Arabic
        navLinks[2].textContent = 'العروض';         // Offers in Arabic
    } else {
        navLinks[0].textContent = 'Home';           // Home in English
        navLinks[1].textContent = 'About Us';       // About Us in English
        navLinks[2].textContent = 'Offers';         // Offers in English
    }

    // Translate content for the Home Section
    const homeContent = document.querySelector('#mainContent');
    if (lang === 'ar') {
        homeContent.querySelector('h1').textContent = 'مرحبًا بكم في قسم الصفحة الرئيسية'; // Arabic Home section heading
        homeContent.querySelector('p').textContent = 'هذه بعض المحتويات التي تعمل مثل شريط قوائم كبير. يتم إخفاؤها بشكل افتراضي ويتم عرضها عند النقر على رابط "الصفحة الرئيسية".'; // Arabic content
        sectionButtons[0].textContent = 'استكشف المزيد'; // Arabic button text
    } else {
        homeContent.querySelector('h1').textContent = 'Welcome to the Home Section'; // English Home section heading
        homeContent.querySelector('p').textContent = 'This is some content that acts like a large menu bar. It is hidden by default and shown when the "Home" link is clicked.'; // English content
        sectionButtons[0].textContent = 'Explore More'; // English button text
    }

    // Translate content for the About Us Section
    const aboutContent = document.querySelector('#aboutContent');
    if (lang === 'ar') {
        aboutContent.querySelector('h1').textContent = 'من نحن'; // Arabic About Us heading
        aboutContent.querySelector('p').textContent = 'تعرف على المزيد عن شركتنا، مهمتنا، وقيمنا. نحن ملتزمون بتقديم أفضل خدمة.'; // Arabic content
        sectionButtons[1].textContent = 'اتصل بنا'; // Arabic button text
    } else {
        aboutContent.querySelector('h1').textContent = 'About Us'; // English About Us heading
        aboutContent.querySelector('p').textContent = 'Learn more about our company, mission, and values. We are committed to providing the best service.'; // English content
        sectionButtons[1].textContent = 'Contact Us'; // English button text
    }

    // Translate content for the Offers Section
    const offersContent = document.querySelector('#offersContent');
    if (lang === 'ar') {
        offersContent.querySelector('h1').textContent = 'عروضنا'; // Arabic Offers heading
        offersContent.querySelector('p').textContent = 'اكتشف أحدث العروض والخصومات التي نقدمها. استفد من العروض المحدودة.'; // Arabic content
        sectionButtons[2].textContent = 'عرض العروض'; // Arabic button text
    } else {
        offersContent.querySelector('h1').textContent = 'Our Offers'; // English Offers heading
        offersContent.querySelector('p').textContent = 'Discover the latest offers and discounts we have available. Take advantage of limited-time promotions.'; // English content
        sectionButtons[2].textContent = 'View Offers'; // English button text
    }

    // Translate the "Sign In" and "Sign Up" buttons
    const signInButton = document.querySelector("button[type='button']:first-of-type");  // The "Sign In" button
    const signUpButton = document.querySelector("button[type='button']:last-of-type");  // The "Sign Up" button

    if (lang === 'ar') {
        signInButton.textContent = 'تسجيل الدخول'; // Arabic Sign In
        signUpButton.textContent = 'التسجيل'; // Arabic Sign Up
    } else {
        signInButton.textContent = 'Sign In'; // English Sign In
        signUpButton.textContent = 'Sign Up'; // English Sign Up
    }

    // Layout direction for Arabic (RTL)
    if (lang === 'ar') {
        document.body.style.direction = 'rtl'; // Switch body to right-to-left
    } else {
        document.body.style.direction = 'ltr'; // Switch body back to left-to-right
    }
}

// Call the function on page load to set the initial content
updateContent();
