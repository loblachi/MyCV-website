let hardwareData = [
    {
        heading: "RAM (Memory) Replacement",
        body: "I have hands-on experience upgrading and replacing RAM modules in laptops. This includes identifying compatible RAM types, safely opening the device using appropriate tools, and ensuring static precautions like using an anti-static wrist strap. I’ve helped improve system performance by increasing memory capacity, and I understand how RAM affects multitasking and overall speed. I've also troubleshooted boot issues caused by faulty or improperly seated RAM sticks.",
        image: "https://www.laptopinventory.com/uploads/parts/original/3337_Asus_F_Series_RAM-Memory_1.JPG"
    },
    {
        heading:"SSD (Solid State Drive) Installation",
        body: "I have installed and upgraded SSDs in laptops to replace older HDDs, significantly improving boot times and system responsiveness. This involves cloning existing drives or performing clean installations of operating systems such as Windows. I’m familiar with SATA and NVMe interfaces and understand how to handle drive mounting, BIOS boot order configuration, and data backup procedures. My SSD work has directly contributed to better storage speed and reliability.",
        image:"https://www.guru3d.com/data/publish/192/b8583db698d5a0c4beb67ca80afb69af0a993d/file-2fd3d57e43d80a5df9.jpg"
    },
    {
        heading:"Laptop Fan Cleaning & Maintenance",
        body:"I’ve opened laptops to clean internal cooling fans and vents, helping to resolve overheating issues and noisy fan operation. This requires careful disassembly, the use of soft brushes or compressed air, and reapplication of thermal paste if necessary. I understand how dust buildup affects thermal performance and can recognize symptoms of fan failure. Regular cleaning and maintenance have improved the stability and lifespan of the laptops I've worked on.",
        image:"https://tse4.mm.bing.net/th/id/OIP._bXjFHTEm0JW0AHeOs08TQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        heading:"Thermal Paste Maintenance Improves Performance",
        body:"Replacing thermal paste in laptops is a valuable freelance service that helps resolve common issues like overheating and performance throttling. Over time, factory-applied thermal paste can dry out and lose its ability to conduct heat effectively. Reapplying high-quality thermal paste restores proper heat transfer between the CPU, GPU, and heatsink, leading to lower operating temperatures and improved system stability. This maintenance step is especially important for extending the lifespan of laptops and ensuring they continue to perform well under heavy use.",
        image:"https://cdn.shopify.com/s/files/1/0068/8943/9320/products/tr7.png?v=1661308234"
    }
]


let sect2_elem = document.querySelector(".section-2-inner-flex"); 

function displayContent() {
    let combinedHtml = ""; 

    hardwareData.forEach( (objData) => {
        let singleHtml = `
        <div class="flex-info-div">
                <div class="left-info-div">
                    <h4>${objData.heading}</h4>
                    <p>${objData.body}</p>
                </div>
                <div class="right-info-div">
                        <img src="${objData.image}" class="ram-img" alt="ram">
                </div>
        </div>
        `
        combinedHtml += singleHtml; 
    })
    sect2_elem.innerHTML = combinedHtml; 
}

displayContent(); 