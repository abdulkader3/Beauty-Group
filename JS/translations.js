// Translation Dictionary
const translations = {
    en: {
        // Navbar
        'nav-home': 'Home',
        'nav-herbal': 'Herbal',
        'nav-treatment': 'Treatment',
        'nav-services': 'Our Services',
        'nav-makeover': 'Makeover',
        'nav-hair-care': 'Hair Care',
        'nav-skin-care': 'Skin Care',
        'nav-hena': 'Hena (Mehedi)',
        'nav-massage': 'Massage',
        'nav-saree': 'Saree Draping',
        'nav-face-treatment': 'Face Treatment',
        'nav-pages': 'Pages',
        'nav-about': 'About Us',
        'nav-contact': 'Contact',
        'nav-blog': 'Blog',
        
        // Common
        'contact-banner-text': 'For any kind of beauty solution, contact us.',
        'contact-btn': 'Contact',
        'back-link': '← Back',
        'home': 'Home',
        'about': 'About',
        'contact': 'Contact',
        'blog': 'Blog',
        
        // Contact Page
        'contact-title': 'Contact',
        'contact-phone': 'Phone',
        'contact-toll-free': 'Toll-Free:',
        'contact-fax': 'Fax:',
        'contact-email': 'Email',
        'contact-address': 'Address',
        'contact-form': 'Contact Form',
        'contact-name': 'Name',
        'contact-email-input': 'Email',
        'contact-message': 'Message',
        'contact-submit': 'Submit',
        
        // Blog Pages
        'blog-title': 'Best shampoo for dry and frizzy hair',
        'recent-articles': 'Recent Articles',
        'tags': 'Tags',
        'hot-deal': 'Hot Deal',
        'older-post': 'Older Post',
        'newer-post': 'Newer Post',
        'comments': 'Comments',
        'leave-comment': 'Leave a comment',
        'comment-name': 'Name',
        'comment-email': 'Email',
        'comment-message': 'Message',
        'comment-submit': 'Submit',
        'share-with': 'Share with us:',
        'herbal': 'Herbal',
        'massage': 'Massage',
        'cleaning': 'Cleaning',
        'face-pack': 'Face Pack',
        'fruits': 'Fruits',
        'lotion': 'Lotion',
        
        // Service Pages - General
        'service-what-is': 'What is',
        'service-benefits': 'Key Benefits',
        'service-duration': 'Duration',
        'service-frequency': 'Recommended Frequency',
        'service-process': 'Process',
        'service-duration-title': 'Treatment Details',
        'service-experience-title': 'What to Expect',
        'back-to-packages': '← Back to Packages',
        
        // Swedish Massage
        'swedish-massage-title': 'Swedish Massage',
        'swedish-massage-desc': 'Classic therapeutic massage for complete body relaxation',
        'swedish-massage-what-is': 'What is Swedish Massage?',
        
        // Fusion Therapy
        'fusion-therapy-title': 'Fusion Therapy',
        'fusion-therapy-desc': 'A unique combination of traditional and modern therapeutic techniques',
        
        // Head Massage
        'head-massage-title': 'Head Massage',
        'head-massage-desc': 'Therapeutic head massage to relieve tension and promote relaxation',
        
        // Hair Treatments
        'haircut-blow-dry-title': 'Haircut & Blow Dry',
        'haircut-blow-dry-desc': 'Professional haircut and blow dry service',
        
        // Manicure/Pedicure
        'spa-manicure-title': 'Spa Manicure',
        'spa-manicure-desc': 'Luxurious manicure treatment with nail care',
        'spa-pedicure-title': 'Spa Pedicure',
        'spa-pedicure-desc': 'Complete foot care treatment with massage',
        'salt-scrub-manicure-title': 'Salt Scrub Manicure',
        'salt-scrub-manicure-desc': 'Exfoliating treatment with nourishing manicure',
        'salt-scrub-pedicure-title': 'Salt Scrub Pedicure',
        'salt-scrub-pedicure-desc': 'Rejuvenating foot treatment with salt scrub',
        
        // Body Treatments
        'papaya-sesame-wrap-title': 'Papaya Sesame Body Wrap',
        'papaya-sesame-wrap-desc': 'Natural body wrap treatment for nourishing skin',
        
        // Facial & Skin
        'cosme-dermat-title': 'Cosme Dermat Treatment',
        'cosme-dermat-desc': 'Advanced cosmetic dermatology treatment',
        'spa-facial-haircut-title': 'Spa Facial & Hair Cut',
        'spa-facial-haircut-desc': 'Complete facial treatment combined with haircut',
        
        // Hair Service (non-service page)
        '3-layer-cut': '3 Step Layer Cut',
        'multiple-layer': 'Multiple Layer',
        'emu-cut': 'Emu Cut',
        'feather-cut': 'Feather Cut',
        'long-slide-cut': 'Long Slide Cut',
        'hair-trim': 'Hair Trim',
        
        // Main Page Content
        'pages-text': 'Pages',
        'about-us': 'About Us',
        'testimonials': 'Testimonials',
        'our-team': 'Our Team',
        'services-section': 'Our Services',
        'service-intro': 'Experience the finest beauty treatments tailored to your needs',
        'explore-btn': 'Explore Services',
        'discover-btn': 'Discover More',
        'view-all': 'View All Services',
        
        // Carousel Captions
        'carousel-beautiful': 'Beautiful Products',
        'carousel-beautiful-desc': 'Premium quality beauty products for you Elit pellentesque habitant morbi tristique. Tellus at urna condimentum mattis pellentesque id nibh tortor ',
        'carousel-natural': 'Natural Ingredients',
        'carousel-natural-desc': 'Made with nature\'s finest ingredients',
        'carousel-herbal': 'Herbal Collection',
        'carousel-herbal-desc': 'Discover our exclusive herbal range',
        
        // Service Cards (Section 2)
        'card-aromatherapy': 'Aromatherapy Massage',
        'card-aromatherapy-desc': 'Relax and rejuvenate with our premium aromatherapy massage therapy. Using essential oils and therapeutic techniques to enhance your wellness journey.',
        'card-jet-hydro': 'Jet Hydro Massage',
        'card-jet-hydro-desc': 'Experience advanced water jet massage therapy that targets deep muscle tension. Our hydro massage sessions provide optimal relaxation and muscle recovery.',
        'card-deep-tissue': 'Deep Tissue Massage',
        'card-deep-tissue-desc': 'Our skilled therapists use concentrated pressure techniques to release chronic muscle tension. Perfect for athletes and those seeking intensive therapeutic relief.',
        'card-hot-stone': 'Hot Stone Massage',
        'card-hot-stone-desc': 'Indulge in the soothing warmth of heated basalt stones combined with massage. This therapeutic treatment promotes circulation and complete body relaxation.',
        
        // About Us Section
        'about-title': 'About Us',
        'about-content-1': 'At Beauty Group, we believe in the transformative power of professional beauty and wellness treatments. Our dedicated team of skilled therapists combines traditional techniques with modern wellness practices to deliver exceptional results.',
        'about-content-2': 'With years of experience in the beauty and spa industry, we are committed to providing personalized treatments tailored to your unique needs. From soothing massages to rejuvenating facials, we offer a complete range of services designed to enhance your natural beauty and promote overall wellness.',
        'about-btn': 'Read more',
        
        // What We Do Section
        'what-we-do-title': 'What we do',
        'what-we-do-1': 'Our mission is to help you look and feel your best through premium beauty and wellness services. We specialize in hair care, skincare, massage therapy, and holistic treatments that nourish both body and mind.',
        'what-we-do-2': 'Using only high-quality, natural products and proven therapeutic techniques, we create a sanctuary where you can escape the stress of daily life. Whether you\'re seeking relaxation or a confidence boost, Beauty Group is your destination for comprehensive beauty and wellness solutions.',
        'what-we-do-btn': 'Read more',
        
        // Testimonials Section
        'testimonials-title': 'Why Customers Trust Us – In Their Own Words',
        'testimonial-elizabeth': 'Elizabeth',
        'testimonial-elizabeth-role': 'CEO - Founder',
        'testimonial-elizabeth-text': 'I really wanted to drop you a line to say thank you for the herbal cosmetic products. All products are wonderful and I particularly like the face serum. It feels nourishing!',
        'testimonial-angelina': 'Angelina',
        'testimonial-angelina-role': 'Beauty Specialist',
        'testimonial-angelina-text': 'I was looking for perfect moisturizers. Glowria was the best decision!',
        'testimonial-monica': 'Monica',
        'testimonial-monica-role': 'Product Reviewer',
        'testimonial-monica-text': 'Very happy to find 100% natural and organic beauty products. Keeps me fresh all day.',
        
        // Blog/Recent Posts Section
        'blog-subtitle': 'Beauty Updates',
        'blog-section-title': 'Recent Posts',
        'blog-post-1-title': 'TIPS TO MAKE YOUR SKIN GLOW NATURALLY',
        'blog-post-1-date': 'January 21, 2020',
        'blog-post-1-text': 'Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas male...',
        'blog-post-1-comments': '3 Comments',
        'blog-post-2-title': 'THE BEST MORNING ANTI SERUM',
        'blog-post-2-date': 'January 21, 2020',
        'blog-post-2-text': 'Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec...',
        'blog-post-2-comments': '1 Comment',
        'blog-post-3-title': 'HOW HAIR SPRAY WORKS?',
        'blog-post-3-date': 'January 20, 2020',
        'blog-post-3-text': 'Tedes yum deriis juyoque gyatatibus ot hyntis ous iouturiement montes, tyucetur ridiculus mus...',
        'blog-post-3-comments': '1 Comment',
        'blog-post-4-title': 'HOMEMADE ALOE GEL',
        'blog-post-4-date': 'January 19, 2020',
        'blog-post-4-text': 'Natural aloe vera gel tutorial...',
        'blog-post-4-comments': '4 Comments',
        'blog-post-5-title': 'BEST SMOOTHIE FOR SKIN',
        'blog-post-5-date': 'January 18, 2020',
        'blog-post-5-text': 'Healthy smoothies for glowing skin.',
        'blog-post-5-comments': '6 Comments',
        'blog-post-6-title': 'WHY ORGANIC PRODUCTS?',
        'blog-post-6-date': 'January 17, 2020',
        'blog-post-6-text': 'Why switch to natural skincare...',
        'blog-post-6-comments': '2 Comments',
        
        // Offer Section
        'offer-title': 'About Us',
        'offer-content-1': 'Beauty Group is your premier destination for comprehensive beauty and wellness treatments. Our team of experienced professionals is dedicated to delivering exceptional service and transformative results for every client.',
        'offer-content-2': 'From revitalizing spa treatments to expert hair and skincare services, we combine traditional beauty practices with modern wellness approaches. Your satisfaction and well-being are our highest priorities as we help you achieve the radiant, refreshed look you deserve.',
        'offer-btn': 'Read More',
        
        // Spa Packages Section
        'package-day-at-spa': 'Day at the Spa',
        'package-day-at-spa-price': '80',
        'package-day-at-spa-services': ['Cosme Dermat Treatment', 'Fusion Therapy', 'Papaya Sesame Body Wrap', 'Spa Manicure', 'Spa Pedicure'],
        'package-slice-of-heaven': 'A Slice of Heaven',
        'package-slice-of-heaven-price': '95',
        'package-slice-of-heaven-services': ['Spa Facial & Hair Cut', 'Aromatherapy', 'Head Massage', 'Salt Scrub Manicure', 'Salt Scrub Pedicure'],
        'package-total-serenity': 'Total Serenity',
        'package-total-serenity-price': '150',
        'package-total-serenity-services': ['Swedish Massage', 'Spa Pedicure', 'Haircut & Blow Dry', 'Salt Scrub Manicure', 'Salt Scrub Pedicure'],
        'package-per-person': '/ person',
        'package-buy-btn': 'Buy Now',
        
        // Footer
        'footer-search': 'Search',
        'footer-help': 'Help',
        'footer-information': 'Information',
        'footer-privacy': 'Privacy Policy',
        'footer-shipping': 'Shipping Details',
        'footer-copyright': '© 2025 Axii Design Themes',
        
        // Support Modal
        'modal-title': 'Beauty-Group Support',
        'modal-subtitle': 'DISCOVER YOUR TRUE BEAUTY',
        'modal-form-title': 'Find Answers Fast',
        'modal-question-placeholder': 'Your Question',
        'modal-terms': 'By clicking the button below, you agree to our',
        'modal-terms-link': 'Terms of service',
        'modal-privacy-link': 'Privacy Policy',
        'modal-submit-btn': 'Ask Question | প্রশ্ন করুন',
        
        // Contact Page - Additional Keys
        'contact-page-title': 'Contact',
        'contact-phone-label': 'Phone',
        'contact-toll-free-label': 'Toll-Free:',
        'contact-fax-label': 'Fax:',
        'contact-email-label': 'Email',
        'contact-address-label': 'Address',
        'contact-form-title': 'Contact Form',
        'contact-name-placeholder': 'Name',
        'contact-email-placeholder': 'Email',
        'contact-phone-placeholder': 'Phone',
        'contact-message-placeholder': 'Message',
        'contact-send-btn': 'Send',
        
        // About Page
        'about-page-title': 'About',
        'about-service-1-title': 'Stone Massage Treatment',
        'about-service-1-desc': 'Experience the healing power of hot stone massage therapy. Our therapists use smooth, heated stones to release tension and improve circulation. This ancient therapeutic technique promotes deep relaxation and rejuvenation for your entire body.',
        'about-service-2-title': 'Elegant Spa Room',
        'about-service-2-desc': 'Step into our luxurious spa environment designed for ultimate comfort and tranquility. Our elegantly appointed rooms feature soft lighting, soothing music, and premium amenities to create the perfect atmosphere for your wellness journey and complete relaxation.',
        'about-service-3-title': 'Skin Relax Treatment',
        'about-service-3-desc': 'Rejuvenate your skin with our comprehensive relaxation treatment. Using premium natural products and expert techniques, we help reduce stress-related skin issues, improve complexion, and restore your skin\'s natural radiance and youthful glow.',
        'about-testimonials-title': 'Testimonials',
        
        // Blog Page
        'blog-page-title': 'Best shampoo for dry and frizzy hair',
        'blog-recent-articles': 'Recent Articles',
        'blog-tags-title': 'Tags',
        'blog-hot-deal': 'Hot Deal',
        
        // Blog Details Page
        'blog-detail-title': 'Best shampoo for dry and frizzy hair',
        'blog-detail-heading': 'Hairwash with herbal shampoo',
        'blog-detail-comments': '2 Comments',
        'blog-older-post': 'Older Post',
        'blog-newer-post': 'Newer Post',
        'blog-comments-title': 'Comments',
        'blog-leave-comment': 'Leave a comment',
        'blog-comment-name': 'Name',
        'blog-comment-email': 'Email',
        'blog-comment-message': 'Message',
        'blog-comment-post-btn': 'Post Comment',
        'blog-comment-submit': 'Submit',
        'blog-share-text': 'Share this post:',
        
        // Service Detail Pages - Headers
        'service-page-header': 'Service',
        'aromatherapy-page-title': 'Aromatherapy',
        'aromatherapy-page-desc': 'Healing through the therapeutic power of natural essential oils',
        'aromatherapy-what-is': 'What is Aromatherapy?',
        'aromatherapy-benefits': 'Key Benefits',
        'aromatherapy-duration': 'Session Duration',
        'aromatherapy-frequency': 'Recommended Frequency',
        'aromatherapy-process': 'Treatment Process',
        'aromatherapy-book-btn': 'Book Now',
        
        // Service Benefits
        'benefit-stress-relief': 'Stress Relief',
        'benefit-stress-relief-desc': 'Essential oils help calm the mind and reduce anxiety',
        'benefit-mental-clarity': 'Mental Clarity',
        'benefit-mental-clarity-desc': 'Improve focus and emotional balance',
        'benefit-physical-healing': 'Physical Healing',
        'benefit-physical-healing-desc': 'Reduce inflammation and enhance physical wellness',
        'benefit-immune-boost': 'Immune Boost',
        'benefit-immune-boost-desc': 'Strengthen immune system with natural oils',
        
        // Service Process
        'service-process-step-1': 'Consultation',
        'service-process-step-1-desc': 'Discussion of your needs and preferences',
        'service-process-step-2': 'Preparation',
        'service-process-step-2-desc': 'Setting up a comfortable environment and selecting the right oils',
        'service-process-step-3': 'Treatment',
        'service-process-step-3-desc': 'Peaceful therapeutic massage and aromatherapy application',
        'service-process-step-4': 'Aftercare',
        'service-process-step-4-desc': 'Post-treatment advice and wellness recommendations',
        
        // General Service Terms
        'service-what-is-title': 'What is',
        'service-benefits-title': 'Benefits',
        'service-duration-title': 'Duration',
        'service-frequency-title': 'Recommended Frequency',
        'service-process-title': 'Process',
        'service-before-after': 'Before & After',
        'service-book-btn': 'Book Now',
        'service-back-to-packages': '← Back to Packages',
    },
    bn: {
        // Navbar
        'nav-home': 'হোম',
        'nav-herbal': 'হার্বাল',
        'nav-treatment': 'চিকিৎসা',
        'nav-services': 'আমাদের সেবা',
        'nav-makeover': 'মেকওভার',
        'nav-hair-care': 'চুলের যত্ন',
        'nav-skin-care': 'ত্বকের যত্ন',
        'nav-hena': 'হেনা (মেহেদি)',
        'nav-massage': 'ম্যাসাজ',
        'nav-saree': 'শাড়ি পরা',
        'nav-face-treatment': 'মুখের চিকিৎসা',
        'nav-pages': 'পৃষ্ঠা',
        'nav-about': 'আমাদের সম্পর্কে',
        'nav-contact': 'যোগাযোগ',
        'nav-blog': 'ব্লগ',
        
        // Common
        'contact-banner-text': 'যে কোনো ধরনের বিউটি সলিউশন পেতে, আমাদের সাথে যোগাযোগ করুন।',
        'contact-btn': 'যোগাযোগ',
        'back-link': '← পিছনে',
        'home': 'হোম',
        'about': 'সম্পর্কে',
        'contact': 'যোগাযোগ',
        'blog': 'ব্লগ',
        
        // Contact Page
        'contact-title': 'যোগাযোগ',
        'contact-phone': 'ফোন',
        'contact-toll-free': 'টোল-ফ্রি:',
        'contact-fax': 'ফ্যাক্স:',
        'contact-email': 'ইমেইল',
        'contact-address': 'ঠিকানা',
        'contact-form': 'যোগাযোগ ফর্ম',
        'contact-name': 'নাম',
        'contact-email-input': 'ইমেইল',
        'contact-message': 'বার্তা',
        'contact-submit': 'জমা দিন',
        
        // Blog Pages
        'blog-title': 'শুষ্ক এবং ঝামেলাপূর্ণ চুলের জন্য সেরা শ্যাম্পু',
        'recent-articles': 'সম্প্রতি নিবন্ধ',
        'tags': 'ট্যাগ',
        'hot-deal': 'গরম ডিল',
        'older-post': 'পুরানো পোস্ট',
        'newer-post': 'নতুন পোস্ট',
        'comments': 'মন্তব্য',
        'leave-comment': 'একটি মন্তব্য ছেড়ে যান',
        'comment-name': 'নাম',
        'comment-email': 'ইমেইল',
        'comment-message': 'বার্তা',
        'comment-submit': 'জমা দিন',
        'share-with': 'আমাদের সাথে শেয়ার করুন:',
        'herbal': 'হার্বাল',
        'massage': 'ম্যাসাজ',
        'cleaning': 'পরিষ্কার',
        'face-pack': 'ফেস প্যাক',
        'fruits': 'ফল',
        'lotion': 'লোশন',
        
        // Service Pages
        'service-what-is': 'এটি কি',
        'service-benefits': 'সুবিধা',
        'service-duration': 'সময়কাল',
        'service-frequency': 'প্রস্তাবিত ফ্রিকোয়েন্সি',
        'service-process': 'প্রক্রিয়া',
        'service-before-after': 'আগে এবং পরে',
        'aromatherapy-title': 'অ্যারোমাথেরাপি',
        'aromatherapy-desc': 'অ্যারোমাথেরাপি একটি সামগ্রিক নিরাময় চিকিৎসা যা প্রাকৃতিক উদ্ভিদ নির্যাস এবং অপরিহার্য তেল ব্যবহার করে স্বাস্থ্য এবং সুস্থতা প্রচার করে।',
        'fusion-therapy-title': 'ফিউশন থেরাপি',
        'fusion-therapy-desc': 'সর্বোত্তম শিথিলতা এবং নিরাময়ের জন্য ঐতিহ্যবাহী এবং আধুনিক থেরাপিউটিক কৌশলের একটি অনন্য সমন্বয়।',
        'head-massage-title': 'মাথার ম্যাসাজ',
        'head-massage-desc': 'মানসিক চাপ দূর করতে, রক্ত সঞ্চালন উন্নত করতে এবং শিথিলতা প্রচার করতে থেরাপিউটিক মাথার ম্যাসাজ।',
        'haircut-title': 'চুল কাটা এবং ব্লো ড্রাই',
        'haircut-desc': 'আপনার চুল তাজা এবং স্টাইলিশ রাখতে পেশাদার চুল কাটা এবং ব্লো ড্রাই সেবা।',
        'spa-manicure-title': 'স্পা ম্যানিকিউর',
        'spa-manicure-desc': 'বিলাসবহুল ম্যানিকিউর চিকিৎসা যার মধ্যে নখের যত্ন, কিউটিকেল যত্ন, ম্যাসাজ এবং পলিশ প্রয়োগ রয়েছে।',
        'spa-pedicure-title': 'স্পা পেডিকিউর',
        'spa-pedicure-desc': 'শিথিল ম্যাসাজ এবং সুন্দর নখের ফিনিশ সহ সম্পূর্ণ পায়ের যত্ন চিকিৎসা।',
        'salt-scrub-manicure-title': 'লবণ স্ক্রাব ম্যানিকিউর',
        'salt-scrub-manicure-desc': 'রেশমী নরম হাতের জন্য প্রাকৃতিক লবণ স্ক্রাব চিকিৎসা সহ পুষ্টিকর ম্যানিকিউর।',
        'salt-scrub-pedicure-title': 'লবণ স্ক্রাব পেডিকিউর',
        'salt-scrub-pedicure-desc': 'প্রাকৃতিক লবণ স্ক্রাব এবং নিবিড় ময়শ্চারাইজিং পেডিকিউর সহ পুনরুজ্জীবনকারী পায়ের চিকিৎসা।',
        'papaya-wrap-title': 'পেঁপে সেসেম বডি র‍্যাপ',
        'papaya-wrap-desc': 'ত্বকের পুষ্টি এবং পুনরুজ্জীবনের জন্য প্রাকৃতিক পেঁপে এবং সেসেম বডি র‍্যাপ চিকিৎসা।',
        'cosme-dermat-title': 'কসমে ডার্মাট চিকিৎসা',
        'cosme-dermat-desc': 'ত্বকের পুনরুজ্জীবন এবং বয়স বিরোধী সুবিধার জন্য উন্নত প্রসাধনী ত্বকবিদ্যা চিকিৎসা।',
        'spa-facial-haircut-title': 'স্পা ফেসিয়াল এবং চুল কাটা',
        'spa-facial-haircut-desc': 'সম্পূর্ণ সৌন্দর্য রূপান্তরের জন্য পেশাদার চুল কাটার সাথে মিলিত সম্পূর্ণ ফেসিয়াল চিকিৎসা।',
        'swedish-massage-title': 'সুইডিশ ম্যাসাজ',
        'swedish-massage-desc': 'ঐতিহ্যবাহী শিথিলতা ম্যাসাজ যা দীর্ঘ প্রবাহিত স্ট্রোক ব্যবহার করে মানসিক চাপ দূর করতে এবং শিথিলতা প্রচার করে।',
        
        // Additional Service Keys
        'service-duration-title': 'চিকিৎসার বিবরণ',
        'service-experience-title': 'কী আশা করতে হবে',
        'back-to-packages': '← প্যাকেজে ফিরুন',
        'swedish-massage-what-is': 'সুইডিশ ম্যাসাজ কী?',
        'haircut-blow-dry-title': 'চুল কাটা এবং ব্লো ড্রাই',
        'haircut-blow-dry-desc': 'পেশাদার চুল কাটা এবং ব্লো ড্রাই সেবা',
        'papaya-sesame-wrap-title': 'পেঁপে সেসেম বডি র্যাপ',
        'papaya-sesame-wrap-desc': 'ত্বক পুষ্ট করার জন্য প্রাকৃতিক বডি র্যাপ চিকিৎসা',
        
        // Hair Service (non-service page)
        '3-layer-cut': '৩ স্তর কাটা',
        'multiple-layer': 'একাধিক স্তর',
        'emu-cut': 'ইমু কাটা',
        'feather-cut': 'পালক কাটা',
        'long-slide-cut': 'দীর্ঘ স্লাইড কাটা',
        'hair-trim': 'চুল ট্রিম',
        
        // Main Page Content
        'pages-text': 'পৃষ্ঠা',
        'about-us': 'আমাদের সম্পর্কে',
        'testimonials': 'প্রশংসাপত্র',
        'our-team': 'আমাদের দল',
        'services-section': 'আমাদের সেবা',
        'service-intro': 'আপনার চাহিদা অনুযায়ী সর্বোত্তম সৌন্দর্য চিকিৎসা অনুভব করুন',
        'explore-btn': 'সেবা অন্বেষণ করুন',
        'discover-btn': 'আরও জানুন',
        'view-all': 'সমস্ত সেবা দেখুন',
        
        // Carousel Captions
        'carousel-beautiful': 'সুন্দর পণ্য',
        'carousel-beautiful-desc': 'আপনার জন্য প্রিমিয়াম মানের সৌন্দর্য পণ্য',
        'carousel-natural': 'প্রাকৃতিক উপাদান',
        'carousel-natural-desc': 'প্রকৃতির সেরা উপাদান দিয়ে তৈরি',
        'carousel-herbal': 'হার্বাল কালেকশন',
        'carousel-herbal-desc': 'আমাদের এক্সক্লুসিভ হার্বাল পরিসীমা আবিষ্কার করুন',
        
        // Service Cards (Section 2)
        'card-aromatherapy': 'অ্যারোমাথেরাপি ম্যাসাজ',
        'card-aromatherapy-desc': 'আমাদের প্রিমিয়াম অ্যারোমাথেরাপি ম্যাসাজ থেরাপি দিয়ে শিথিল এবং পুনরুজ্জীবিত হন। প্রয়োজনীয় তেল এবং থেরাপিউটিক কৌশল ব্যবহার করে আপনার সুস্থতার যাত্রা বৃদ্ধি করুন।',
        'card-jet-hydro': 'জেট হাইড্রো ম্যাসাজ',
        'card-jet-hydro-desc': 'উন্নত জল জেট ম্যাসাজ থেরাপি অনুভব করুন যা গভীর পেশী চাপ লক্ষ্য করে। আমাদের হাইড্রো ম্যাসাজ সেশন সর্বোত্তম শিথিলতা এবং পেশী পুনরুদ্ধার প্রদান করে।',
        'card-deep-tissue': 'গভীর টিস্যু ম্যাসাজ',
        'card-deep-tissue-desc': 'আমাদের দক্ষ থেরাপিস্টরা দীর্ঘস্থায়ী পেশী চাপ মুক্ত করতে কেন্দ্রীভূত চাপ কৌশল ব্যবহার করেন। অ্যাথলেট এবং নিবিড় থেরাপিউটিক ত্রাণ খুঁজছেন তাদের জন্য নিখুঁত।',
        'card-hot-stone': 'হট স্টোন ম্যাসাজ',
        'card-hot-stone-desc': 'ম্যাসাজের সাথে মিলিত উত্তপ্ত বেসল্ট পাথরের প্রশান্তিদায়ক উষ্ণতা উপভোগ করুন। এই থেরাপিউটিক চিকিৎসা রক্ত সঞ্চালন প্রচার করে এবং সম্পূর্ণ শরীর শিথিলতা প্রদান করে।',
        
        // About Us Section
        'about-title': 'আমাদের সম্পর্কে',
        'about-content-1': 'বিউটি গ্রুপে, আমরা পেশাদার সৌন্দর্য এবং সুস্থতা চিকিৎসার রূপান্তরকারী শক্তিতে বিশ্বাস করি। আমাদের নিবেদিত দক্ষ থেরাপিস্টদের দল ব্যতিক্রমী ফলাফল প্রদানের জন্য ঐতিহ্যবাহী কৌশলগুলিকে আধুনিক সুস্থতা অনুশীলনের সাথে একত্রিত করে।',
        'about-content-2': 'সৌন্দর্য এবং স্পা শিল্পে বছরের অভিজ্ঞতা সহ, আমরা আপনার অনন্য চাহিদার সাথে মানানসই ব্যক্তিগতকৃত চিকিৎসা প্রদান করতে প্রতিশ্রুতিবদ্ধ। প্রশান্তিদায়ক ম্যাসাজ থেকে পুনরুজ্জীবনকারী ফেসিয়াল পর্যন্ত, আমরা আপনার প্রাকৃতিক সৌন্দর্য বৃদ্ধি এবং সামগ্রিক সুস্থতা প্রচারের জন্য ডিজাইন করা সেবাগুলির সম্পূর্ণ পরিসীমা অফার করি।',
        'about-btn': 'আরও পড়ুন',
        
        // What We Do Section
        'what-we-do-title': 'আমরা কি করি',
        'what-we-do-1': 'আমাদের মিশন হল প্রিমিয়াম সৌন্দর্য এবং সুস্থতা সেবার মাধ্যমে আপনাকে সেরা দেখতে এবং অনুভব করতে সাহায্য করা। আমরা চুলের যত্ন, ত্বকের যত্ন, ম্যাসাজ থেরাপি এবং সামগ্রিক চিকিৎসা বিশেষজ্ঞ যা শরীর এবং মন উভয়কে পুষ্ট করে।',
        'what-we-do-2': 'শুধুমাত্র উচ্চ মানের, প্রাকৃতিক পণ্য এবং প্রমাণিত থেরাপিউটিক কৌশল ব্যবহার করে, আমরা একটি অভয়ারণ্য তৈরি করি যেখানে আপনি দৈনন্দিন জীবনের চাপ থেকে পালিয়ে যেতে পারেন। আপনি শিথিলতা খুঁজছেন বা আত্মবিশ্বাসের বৃদ্ধি, বিউটি গ্রুপ ব্যাপক সৌন্দর্য এবং সুস্থতা সমাধানের জন্য আপনার গন্তব্য।',
        'what-we-do-btn': 'আরও পড়ুন',
        
        // Testimonials Section
        'testimonials-title': 'কেন গ্রাহকরা আমাদের বিশ্বাস করেন – তাদের নিজস্ব কথায়',
        'testimonial-elizabeth': 'এলিজাবেথ',
        'testimonial-elizabeth-role': 'সিইও - প্রতিষ্ঠাতা',
        'testimonial-elizabeth-text': 'আমি সত্যিই আপনাকে লাইন ড্রপ করতে চেয়েছিলাম হার্বাল প্রসাধনী পণ্যের জন্য ধন্যবাদ বলতে। সমস্ত পণ্য দুর্দান্ত এবং আমি বিশেষত ফেস সেরাম পছন্দ করি। এটি পুষ্টিকর অনুভব করে!',
        'testimonial-angelina': 'এঞ্জেলিনা',
        'testimonial-angelina-role': 'সৌন্দর্য বিশেষজ্ঞ',
        'testimonial-angelina-text': 'আমি নিখুঁত ময়শ্চারাইজার খুঁজছিলাম। গ্লোরিয়া সেরা সিদ্ধান্ত ছিল!',
        'testimonial-monica': 'মনিকা',
        'testimonial-monica-role': 'পণ্য পর্যালোচক',
        'testimonial-monica-text': '১০০% প্রাকৃতিক এবং জৈব সৌন্দর্য পণ্য খুঁজে পেয়ে অত্যন্ত খুশি। আমাকে সারাদিন তাজা রাখে।',
        
        // Blog/Recent Posts Section
        'blog-subtitle': 'সৌন্দর্য আপডেট',
        'blog-section-title': 'সাম্প্রতিক পোস্ট',
        'blog-post-1-title': 'আপনার ত্বক প্রাকৃতিকভাবে উজ্জ্বল করার টিপস',
        'blog-post-1-date': 'জানুয়ারি ২১, ২০২০',
        'blog-post-1-text': 'Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas male...',
        'blog-post-1-comments': '৩টি মন্তব্য',
        'blog-post-2-title': 'সেরা সকালের বিরোধী সেরাম',
        'blog-post-2-date': 'জানুয়ারি ২১, ২০২০',
        'blog-post-2-text': 'Cames cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec...',
        'blog-post-2-comments': '১টি মন্তব্য',
        'blog-post-3-title': 'হেয়ার স্প্রে কীভাবে কাজ করে?',
        'blog-post-3-date': 'জানুয়ারি ২০, ২০২०',
        'blog-post-3-text': 'Tedes yum deriis juyoque gyatatibus ot hyntis ous iouturiement montes, tyucetur ridiculus mus...',
        'blog-post-3-comments': '১টি মন্তব্য',
        'blog-post-4-title': 'ঘরে তৈরি অ্যালো জেল',
        'blog-post-4-date': 'জানুয়ারি ১৯, ২০२०',
        'blog-post-4-text': 'প্রাকৃতিক অ্যালো ভেরা জেল টিউটোরিয়াল...',
        'blog-post-4-comments': '৪টি মন্তব্য',
        'blog-post-5-title': 'ত্বকের জন্য সেরা স্মুদি',
        'blog-post-5-date': 'জানুয়ারি ১৮, ২०२०',
        'blog-post-5-text': 'উজ্জ্বল ত্বকের জন্য স্বাস্থ্যকর স্মুদি।',
        'blog-post-5-comments': '৬টি মন্তব্য',
        'blog-post-6-title': 'জৈব পণ্য কেন?',
        'blog-post-6-date': 'জানুয়ারি ১৭, २०२०',
        'blog-post-6-text': 'প্রাকৃতিক ত্বকের যত্নে কেন স্যুইচ করুন...',
        'blog-post-6-comments': '२টি মন্তব্য',
        
        // Offer Section
        'offer-title': 'আমাদের সম্পর্কে',
        'offer-content-1': 'বিউটি গ্রুপ ব্যাপক সৌন্দর্য এবং সুস্থতা চিকিৎসার জন্য আপনার প্রিমিয়ার গন্তব্য। আমাদের অভিজ্ঞ পেশাদারদের দল প্রতিটি ক্লায়েন্টের জন্য ব্যতিক্রমী সেবা এবং রূপান্তরকারী ফলাফল প্রদান করতে নিবেদিত।',
        'offer-content-2': 'পুনরুজ্জীবনকারী স্পা চিকিৎসা থেকে বিশেষজ্ঞ চুল এবং ত্বকের যত্ন সেবা পর্যন্ত, আমরা ঐতিহ্যবাহী সৌন্দর্য অনুশীলনকে আধুনিক সুস্থতা পদ্ধতির সাথে একত্রিত করি। আপনার সন্তুষ্টি এবং সুস্থতা আমাদের সর্বোচ্চ অগ্রাধিকার কারণ আমরা আপনাকে আপনি প্রাপ্য উজ্জ্বল, সতেজ চেহারা অর্জন করতে সাহায্য করি।',
        'offer-btn': 'আরও পড়ুন',
        
        // Spa Packages Section
        'package-day-at-spa': 'দিনটা স্পায়',
        'package-day-at-spa-price': '৮০',
        'package-day-at-spa-services': ['কসমে ডার্মাট চিকিৎসা', 'ফিউশন থেরাপি', 'পেঁপে সেসেম বডি র‍্যাপ', 'স্পা ম্যানিকিউর', 'স্পা পেডিকিউর'],
        'package-slice-of-heaven': 'স্বর্গের একটি স্লাইস',
        'package-slice-of-heaven-price': '९५',
        'package-slice-of-heaven-services': ['স্পা ফেসিয়াল এবং চুল কাটা', 'অ্যারোমাথেরাপি', 'মাথার ম্যাসাজ', 'লবণ স্ক্রাব ম্যানিকিউর', 'লবণ স্ক্রাব পেডিকিউর'],
        'package-total-serenity': 'সম্পূর্ণ শান্তি',
        'package-total-serenity-price': '१५०',
        'package-total-serenity-services': ['সুইডিশ ম্যাসাজ', 'স্পা পেডিকিউর', 'চুল কাটা এবং ব্লো ড্রাই', 'লবণ স্ক্রাব ম্যানিকিউর', 'লবণ স্ক্রাব পেডিকিউর'],
        'package-per-person': '/ ব্যক্তি',
        'package-buy-btn': 'এখনই কিনুন',
        
        // Footer
        'footer-search': 'অনুসন্ধান',
        'footer-help': 'সাহায্য',
        'footer-information': 'তথ্য',
        'footer-privacy': 'গোপনীয়তা নীতি',
        'footer-shipping': 'শিপিং বিশদ',
        'footer-copyright': '© २०२५ অক্সি ডিজাইন থিম',
        
        // Support Modal
        'modal-title': 'সৌন্দর্য-গ্রুপ সহায়তা',
        'modal-subtitle': 'আপনার সত্যিকারের সৌন্দর্য আবিষ্কার করুন',
        'modal-form-title': 'দ্রুত উত্তর খুঁজুন',
        'modal-question-placeholder': 'আপনার প্রশ্ন',
        'modal-terms': 'নীচের বোতামটি ক্লিক করে, আপনি আমাদের সম্মত হন',
        'modal-terms-link': 'সেবার শর্তাবলী',
        'modal-privacy-link': 'গোপনীয়তা নীতি',
        'modal-submit-btn': 'প্রশ্ন জিজ্ঞাসা করুন | প্রশ্ন করুন',
        
        // Contact Page - Additional Keys
        'contact-page-title': 'যোগাযোগ',
        'contact-phone-label': 'ফোন',
        'contact-toll-free-label': 'টোল-ফ্রি:',
        'contact-fax-label': 'ফ্যাক্স:',
        'contact-email-label': 'ইমেইল',
        'contact-address-label': 'ঠিকানা',
        'contact-form-title': 'যোগাযোগ ফর্ম',
        'contact-name-placeholder': 'নাম',
        'contact-email-placeholder': 'ইমেইল',
        'contact-phone-placeholder': 'ফোন',
        'contact-message-placeholder': 'বার্তা',
        'contact-send-btn': 'পাঠান',
        
        // About Page
        'about-page-title': 'সম্পর্কে',
        'about-service-1-title': 'স্টোন ম্যাসাজ চিকিৎসা',
        'about-service-1-desc': 'হট স্টোন ম্যাসাজ থেরাপির নিরাময় শক্তি অনুভব করুন। আমাদের থেরাপিস্টরা মসৃণ, উত্তপ্ত পাথর ব্যবহার করে টেনশন মুক্ত করেন এবং রক্ত সঞ্চালন উন্নত করেন। এই প্রাচীন থেরাপিউটিক কৌশল আপনার সম্পূর্ণ শরীরের জন্য গভীর শিথিলতা এবং পুনরুজ্জীবন প্রচার করে।',
        'about-service-2-title': 'মার্জিত স্পা রুম',
        'about-service-2-desc': 'চূড়ান্ত আরাম এবং শান্তির জন্য ডিজাইন করা আমাদের বিলাসবহুল স্পা পরিবেশে প্রবেশ করুন। আমাদের মার্জিতভাবে সজ্জিত রুমগুলি নরম আলো, প্রশান্তিদায়ক সঙ্গীত এবং প্রিমিয়াম সুবিধা সহ আপনার সুস্থতা যাত্রা এবং সম্পূর্ণ শিথিলতার জন্য নিখুঁত পরিবেশ তৈরি করে।',
        'about-service-3-title': 'ত্বক শিথিলকরণ চিকিৎসা',
        'about-service-3-desc': 'আমাদের ব্যাপক শিথিলকরণ চিকিৎসার সাথে আপনার ত্বক পুনরুজ্জীবিত করুন। প্রিমিয়াম প্রাকৃতিক পণ্য এবং বিশেষজ্ঞ কৌশল ব্যবহার করে, আমরা চাপ-সম্পর্কিত ত্বক সমস্যা হ্রাস করতে, বর্ণ উন্নত করতে এবং আপনার ত্বকের প্রাকৃতিক উজ্জ্বলতা এবং যুবক উজ্জ্বলতা পুনরুদ্ধার করতে সাহায্য করি।',
        'about-testimonials-title': 'প্রশংসাপত্র',
        
        // Blog Page
        'blog-page-title': 'সেরা শুষ্ক এবং ঝামেলাপূর্ণ চুলের শ্যাম্পু',
        'blog-recent-articles': 'সম্প্রতি নিবন্ধ',
        'blog-tags-title': 'ট্যাগ',
        'blog-hot-deal': 'গরম ডিল',
        
        // Blog Details Page
        'blog-detail-title': 'সেরা শুষ্ক এবং ঝামেলাপূর্ণ চুলের শ্যাম্পু',
        'blog-detail-heading': 'হার্বাল শ্যাম্পু দিয়ে চুল ধোয়া',
        'blog-detail-comments': '২টি মন্তব্য',
        'blog-older-post': 'পুরানো পোস্ট',
        'blog-newer-post': 'নতুন পোস্ট',
        'blog-comments-title': 'মন্তব্য',
        'blog-leave-comment': 'একটি মন্তব্য ছেড়ে যান',
        'blog-comment-name': 'নাম',
        'blog-comment-email': 'ইমেইল',
        'blog-comment-message': 'মন্তব্য',
        'blog-comment-post-btn': 'মন্তব্য পোস্ট করুন',
        'blog-comment-submit': 'জমা দিন',
        'blog-share-text': 'এই পোস্ট শেয়ার করুন:',
        
        // Service Detail Pages - Headers
        'service-page-header': 'সেবা',
        'aromatherapy-page-title': 'অ্যারোমাথেরাপি',
        'aromatherapy-page-desc': 'প্রাকৃতিক অপরিহার্য তেলের থেরাপিউটিক শক্তির মাধ্যমে নিরাময়',
        'aromatherapy-what-is': 'অ্যারোমাথেরাপি কি?',
        'aromatherapy-benefits': 'মূল সুবিধা',
        'aromatherapy-duration': 'সেশনের সময়কাল',
        'aromatherapy-frequency': 'সুপারিশকৃত ফ্রিকোয়েন্সি',
        'aromatherapy-process': 'প্রক্রিয়া',
        'aromatherapy-book-btn': 'এখন বুক করুন',
        
        // Service Benefits
        'benefit-stress-relief': 'চাপ ত্রাণ',
        'benefit-stress-relief-desc': 'প্রয়োজনীয় তেল মন শান্ত করতে এবং উদ্বেগ হ্রাস করতে সাহায্য করে',
        'benefit-mental-clarity': 'মানসিক স্পষ্টতা',
        'benefit-mental-clarity-desc': 'ফোকাস উন্নত করুন এবং আবেগময় ভারসাম্য উন্নত করুন',
        'benefit-physical-healing': 'শারীরিক নিরাময়',
        'benefit-physical-healing-desc': 'প্রদাহ হ্রাস করুন এবং শারীরিক সুস্থতা বৃদ্ধি করুন',
        'benefit-immune-boost': 'প্রতিরক্ষা বৃদ্ধি',
        'benefit-immune-boost-desc': 'প্রতিরক্ষা ব্যবস্থা শক্তিশালী করুন প্রাকৃতিক তেল দিয়ে',
        
        // Service Process
        'service-process-step-1': 'পরামর্শ',
        'service-process-step-1-desc': 'আপনার চাহিদা এবং পছন্দ সম্পর্কে আলোচনা',
        'service-process-step-2': 'প্রস্তুতি',
        'service-process-step-2-desc': 'আরামদায়ক পরিবেশ সেট আপ এবং সঠিক তেল নির্বাচন',
        'service-process-step-3': 'চিকিৎসা',
        'service-process-step-3-desc': 'শান্তিপূর্ণ থেরাপিউটিক ম্যাসাজ এবং অ্যারোমাথেরাপি প্রয়োগ',
        'service-process-step-4': 'পরবর্তী যত্ন',
        'service-process-step-4-desc': 'পরবর্তী যত্ন পরামর্শ এবং মঙ্গলমান সুপারিশ',
        
        // General Service Terms
        'service-what-is-title': 'এটি কি?',
        'service-benefits-title': 'সুবিধা',
        'service-duration-title': 'সময়কাল',
        'service-frequency-title': 'সুপারিশকৃত ফ্রিকোয়েন্সি',
        'service-process-title': 'প্রক্রিয়া',
        'service-before-after': 'আগে এবং পরে',
        'service-book-btn': 'এখন বুক করুন',
        'service-back-to-packages': '← প্যাকেজে ফিরুন',
    }
};

// Language Manager
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.init();
    }

    init() {
        this.updateLanguage(this.currentLanguage);
    }

    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('selectedLanguage', lang);
        this.updateLanguage(lang);
    }

    getTranslation(key) {
        return translations[this.currentLanguage][key] || key;
    }

    updateLanguage(lang) {
        document.documentElement.lang = lang;
        document.body.setAttribute('data-language', lang);
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                element.placeholder = translations[lang][key];
            }
        });

        // Update language toggle button styling
        this.updateLanguageButtons();
    }

    updateLanguageButtons() {
        // Update all ENG buttons
        document.querySelectorAll('[id="langBtnEng"]').forEach(btn => {
            if (this.currentLanguage === 'en') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update all BNG buttons
        document.querySelectorAll('[id="langBtnBng"]').forEach(btn => {
            if (this.currentLanguage === 'bn') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

// Initialize language manager when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    window.languageManager = new LanguageManager();
});
