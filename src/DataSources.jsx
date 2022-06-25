import React from 'react'
import { Container } from 'react-bootstrap'
import './DataSources.css'
export default function DataSources() {
    let data=[
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download.png',
            name: 'Google Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/google-analytics.png',
            name:'Google Analytics'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/google-analytics.png',
            name: 'Google Analytics 4'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/unnamed.png',
            name: 'Google my Business'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/facebook-ads-logo-1.png',
            name: 'Facebook Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/logo.png',
            name: 'Twitter Insight'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/hh_drive_96dp-1.png',
            name: 'Google Drive'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/YouTube_social_white_squircle.svg.webp',
            name: 'Youtube Analytics'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/images-removebg-preview.png',
            name: 'LinkedIn Insight'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/instagram.jpeg',
            name: 'Instagram Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/Perfect-Audience-PA-New-Logo-Round.webp',
            name: 'Perfect Audience'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/instagram.jpeg',
            name: 'Instagram Insight'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/Pinterest-logo.png',
            name: 'Pinterest Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/7e94a40f-bf9a-495b-a8d3-28f4c7636313.png',
            name: 'Constant Contact'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/o_1ebo7h0gt11ee3i7j764evn52a-removebg-preview.png',
            name: 'Google Tag Manager'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/amazon-1.png',
            name: 'Amazon Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/Snapchat-Logo-2019-present-scaled.jpg',
            name: 'Snapchat Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/ac-blue-orb.png',
            name: 'Active Campaign'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/5b880c7e780bbf474a5bc9db_Logo-removebg-preview.png',
            name: 'Wild Jar'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/dccf2a8c22b5b516c381bea17efd6f061d83fb47.jpg',
            name: 'Dialog Tech'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/imgbin-doubleclick-for-publishers-digital-marketing-advertising-marketing-y6Ds9Xvq9mRAVc1tUtL9MTRAf-removebg-preview.png',
            name: 'Double Click for Publishers'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/633b600e06fdde23ae8cd0294a44f35a-pinterest-logo-png-news-today.jpg',
            name: 'Pinterest Analytics'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/images-1.png',
            name: 'Facebook Insight'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/x8cw6pjremdjkvsborpl.webp',
            name: 'Call Box'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/call-rail.png',
            name: 'Call Rail'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/w3dpkvb0ogtait26lo3n-1.webp',
            name: 'StackAdapt'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/unnamed-1.png',
            name: 'Simplifi'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/file_formats3_csv-512.webp',
            name: 'Excel/CSV'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/o_1ebo7h0gt11ee3i7j764evn52a-removebg-preview.png',
            name: 'Google Search Console'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download__1_-removebg-preview.png',
            name: 'Call Tracking Metrics'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/7e94a40f-bf9a-495b-a8d3-28f4c7636313.png',
            name: 'Constant Contact'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/whatconverts.webp',
            name: 'What Converts'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download-removebg-preview.png',
            name: 'Moosend'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/apex-chat.png',
            name: 'Apex Chat'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download-1.jpg',
            name: 'Avanser'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download-2.jpg',
            name: 'Shopify '
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/610d755a522fdc6efe581c61_klaviyo.svg',
            name: 'Klaviyo'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download-2.png',
            name: 'Mailchimp'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/0000016f-1954-4cf8-a236-41db09e43f8d.png',
            name: 'AdKernel'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/microsoft-logo-icon-png-favpng-685u6bvjmVTSVQvgf1yFZk2yh.jpg',
            name: 'Microsoft Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/2_1oErIBuwqY5dkVAyTqYHuw.png',
            name: 'Unbounce'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/logo.png',
            name: 'Twitter'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/quora.png',
            name: 'Quora Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/twilio-logo-11609380242jwkoktksba.png',
            name: 'Twilio'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download-3.jpg',
            name: 'Choozle'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download-4.png',
            name: 'Taboola'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/logo967.png',
            name: 'Criteo'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/download-4.jpg',
            name: 'TradeDesk'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/tiktok_ads.png',
            name: 'TikTok Analytics'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/fb53bbf9ab3ca88a613116a72528da85.png',
            name: 'Spotify Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/tiktok_ads.png',
            name: 'TikTok Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/CI3h88L0lu8CEAE.webp',
            name: 'Adroll'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png',
            name: 'Reddit Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/6191a35e8fa52f962b899d59_61329519ef74f631c6a736fb_Apple.svg',
            name: 'Apple Seach Ads'
        },
        {
            icon: 'https://lsalead.com/wp-content/uploads/2022/05/bC9K1wp6TzDafW8nJ0T6djIm7sLXbqJ67LKF.png',
            name: 'Display and Video 360'
        }
              
    ]
  return (
   <div style={{marginTop:'120px'}} ><h1 style={{textAlign:'center'}}>DataSources</h1>
   <div id='data'>
    
        {data.map((dat)=>{
            return(
           <div id='dat' key={dat.icon}>
            <img src={dat.icon} id='img' alt={dat.name} /><p>
            {dat.name}</p>
           </div>
           )
        })}
    
  
   </div>
   </div>
  )
}
