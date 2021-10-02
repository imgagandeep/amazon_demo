$(document).ready( function () {
    // Title
    document.getElementById('title').innerHTML = "Lenovo IdeaPad Slim 3 (2021) | AMD Ryzen 5 |14' FHD IPS |Thin and Light Laptop | 4-Side Narrow Bezel (8GB/512GB SSD/Win10/MS Office 2019/Backlit KB/Fingerprint Reader/Arctic Grey/1.41Kg), 82KT00BXIN"
    // Store
    document.getElementById('store').innerHTML = "Visit the Lenovo Store"

    // MRP & Without Exchange MRP
    document.getElementById('mrp1').innerHTML = "₹71,290.00"
    document.getElementById('mrp2').innerHTML = "₹71,290.00"

    // Price, Free Delivery & Without Exchange Price
    document.getElementById('price1').innerHTML = "₹51,990.00"
    document.getElementById('price2').innerHTML = "₹51,990.00"
    document.getElementById('price3').innerHTML = "₹51,990.00"
    
    // Saving
    document.getElementById('saving').innerHTML = "₹19,300.00 (27%)"
    // EMI
    document.getElementById('emi').innerHTML = "₹2,447"
    // With exchange
    document.getElementById('with_ex').innerHTML = "₹18,250.00"
    // Warranty
    document.getElementById('warranty').innerHTML = "₹2,499.00"
    // Delivery Date
    document.getElementById('date_del').innerHTML = "Friday Sep17"
    // Stock
    document.getElementById('stock').innerHTML = "In Stock"
    // Retailer
    document.getElementById('retailer').innerHTML = "Appario Retail Private Ltd"
    
    // About
    let data = [
        'Processor: 5th Gen AMD Ryzen 5 5500U | Speed: 2.1 GHz (Base) - 4.0 GHz (Max) | 6 Cores | 8MB Cache',
        'OS: Pre-Loaded Windows 10 Home with Lifetime Validity',
        'Pre-Installed: MS Office Home and Student 2019',
        'Memory and Storage: 8GB RAM DDR4, Upgradable up to 12GB | 512 GB SSD',
        'Display: 14" FHD (1920x1080) | Brightness : 300nits | IPS Technology | 45% NTSC | Anti-Glare'
    ];

    let list = document.getElementById("about");

    data.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })


    let s_table = document.getElementById('stock_table')
    let s_tbody = document.createElement('tbody')
    s_table.appendChild(s_tbody)

    let s_dict = {
        'Series': '‎IdeaPad 3',
        'Brand': 'Lenovo',
        'Specific Uses For Product': 'Personal, Business',
        'Screen Size': '14 Inches',
        'Operating System': 'Windows 10 Home'
    }

    // Manufacturer Description 1
    document.getElementById('desc_1').innerHTML = "At 19.9mm and just 1.41kg the Ideapad Slim 3 is the thinnest in its category and it's light enough to carry everywhere. And the 4-Sided Narrow Bezels on the 14” FHD display is sure to give you more for less."
    // Manufacturer Description 2
    document.getElementById('desc_2').innerHTML = "With an AMD Ryzen 5 Processor, find a laptop that truly can keep up with your needs and more! It also comes with an option of NVIDIA MX-450graphics has some serious damage on latest gaming titles."
    // Manufacturer Description 3
    document.getElementById('desc_3').innerHTML = "With Lenovo’s Rapid Charge Technology, pace through all your tasks without being burdened by your charging cable and when you do need to charge, go from 0 to 80 within 30 minutes. Charge in one go and sit back rest assured to have a battery life of up to 6 hours after 1 single charge from the 3-cell 45Wh battery"
    // Manufacturer Description 4
    document.getElementById('desc_4').innerHTML = "The IdeaPad features a host of ports including USB-C to always stay connected no matter the device. Additionally, it’s equipped with 1 USB 3.2 Gen 1, 1 HDMI, 1 USB 2, 1 Card Reader Slot along with 1 3.5 mm headphone/microphone jack, so never have to worry about any other adaptors."

    

    for (var key in s_dict) {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerText = key
        td1.setAttribute("style", "font-weight: bold;")
        
        let td2 = document.createElement('td');
        td2.innerText = s_dict[key]

        tr.appendChild(td1)
        tr.appendChild(td2)
        s_table.appendChild(tr)
    }



    let table1 = document.getElementById('product_table')
    let tbody1 = document.createElement('tbody')
    table1.appendChild(tbody1)

    let dict1 = {
        'Brand': 'Lenovo',
        'Manufacturer': 'Lenovo, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic & technology development area Hefei Anhui China LCFC（Hefei) Electronics Technology Co., Ltd. - NO.1-3188,YUNGU ROAD, HEFEI EXPORT PROCESSING ZONE. ANHUI PROVINCE,CHINA Tech-Com(Shanghai) Computer Co Ltd - No.6 Ln.58,San-Zhuang Rd., Songjiang EPZ ShangHai, China Wistron InfoComm (Kunshan) Co.Ltd - 168# First Avenue, Kunshan Export Processing Zone, Kunshan, Jiangsu, China Compal information technology (kunshan) CO., LTD. - Address: No. 58, the 1st street, Kunshan Export Processing Zone, Jiangsu, P.R.O.C. CHINA Kunshan Hichain storage Co. Ltd - No. 88 Xinxiang Road Avenue Kunshan CBZ Wujiang Hichain warehousing LTD - No.2088 Pangjin road, Wujiang economic development area, Jiangsu, China',
        'Series': '‎IdeaPad 3',
        'Colour': 'ARCTIC_GREY',
        'Batteries': '1 Lithium Polymer batteries required. (included)',
        'Item model number': '82KT00BXIN',
        'Processor Brand': '‎AMD',
        'Processor Type': 'Ryzen 5',
        'Processor Speed': '2.1 GHz',
        'Processor Count': '6'
    }
    

    for (var key in dict1) {
        let tr = document.createElement('tr');
        tr.setAttribute("id", "bottom_border")

        let td1 = document.createElement('td');
        td1.innerText = key
        td1.setAttribute("id", "right_border")
        
        let td2 = document.createElement('td');
        td2.innerText = dict1[key]

        tr.appendChild(td1)
        tr.appendChild(td2)
        tbody1.appendChild(tr)
    }


    let table2 = document.getElementById('additional_table')
    let tbody2 = document.createElement('tbody')
    table2.appendChild(tbody2)

    let dict2 = {
        'ASIN': 'B096SKFBCF',
        'Customer Reviews': '4.5 out of 5 stars',
        'Date First Available ': '7 June 2021',
        'Packer': 'One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic & technology development area Hefei Anhui China LCFC（Hefei) Electronics Technology Co., Ltd. - NO.1-3188,YUNGU ROAD, HEFEI EXPORT PROCESSING ZONE. ANHUI PROVINCE,CHINA Tech-Com(Shanghai) Computer Co Ltd - No.6 Ln.58,San-Zhuang Rd., Songjiang EPZ ShangHai, China Wistron InfoComm (Kunshan) Co.Ltd - 168# First Avenue, Kunshan Export Processing Zone, Kunshan, Jiangsu, China Compal information technology (kunshan) CO., LTD. - Address: No. 58, the 1st street, Kunshan Export Processing Zone, Jiangsu, P.R.O.C. CHINA Kunshan Hichain storage Co. Ltd - No. 88 Xinxiang Road Avenue Kunshan CBZ Wujiang Hichain warehousing LTD - No.2088 Pangjin road, Wujiang economic development area, Jiangsu, China',
        'Importer': 'Lenovo (India) Private Limited, RBD Icon, Level 2, Doddenakundi Village, Marathahalli Outer Ring Road, K. R. Puram Hobli, Bangalore 560037, Karnataka, India',
        'Generic Name': 'Laptop'
    }
    

    for (var key in dict2) {
        let tr = document.createElement('tr');
        tr.setAttribute("id", "bottom_border")

        let td1 = document.createElement('td');
        td1.innerText = key
        td1.setAttribute("id", "right_border")
        
        let td2 = document.createElement('td');
        td2.innerText = dict2[key]

        tr.appendChild(td1)
        tr.appendChild(td2)
        tbody2.appendChild(tr)
    }

});





