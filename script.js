function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  function canvas(){
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./images/042.png
./images/043.png
./images/044.png
./images/045.png
./images/046.png
./images/047.png
./images/048.png
./images/049.png
./images/050.png
./images/051.png
./images/052.png
./images/053.png
./images/054.png
./images/055.png
./images/056.png
./images/057.png
./images/058.png
./images/059.png
./images/060.png
./images/061.png
./images/062.png
./images/063.png
./images/064.png
./images/065.png
./images/066.png
./images/067.png
./images/068.png
./images/069.png
./images/070.png
./images/071.png
./images/072.png
./images/073.png
./images/074.png
./images/075.png
./images/076.png
./images/077.png
./images/078.png
./images/079.png
./images/080.png
./images/081.png
./images/082.png
./images/083.png
./images/084.png
./images/085.png
./images/086.png
./images/087.png
./images/088.png
./images/089.png
./images/090.png
./images/091.png
./images/092.png
./images/093.png
./images/094.png
./images/095.png
./images/096.png
./images/097.png
./images/098.png
./images/099.png
./images/100.png
./images/101.png
./images/102.png
./images/103.png
./images/104.png
./images/105.png
./images/106.png
./images/107.png
./images/108.png
./images/109.png
./images/110.png
./images/111.png
./images/112.png
./images/113.png
./images/114.png
./images/115.png
./images/116.png
./images/117.png
./images/118.png
./images/119.png
./images/120.png
./images/121.png
./images/122.png
./images/123.png
./images/124.png
./images/125.png
./images/126.png
./images/127.png
./images/128.png
./images/129.png
./images/130.png
./images/131.png
./images/132.png
./images/133.png
./images/134.png
./images/135.png
./images/136.png
./images/137.png
./images/138.png
./images/139.png
./images/140.png
./images/141.png
./images/142.png
./images/143.png
./images/144.png
./images/145.png
./images/146.png
./images/147.png
./images/148.png
./images/149.png
./images/150.png
./images/151.png
./images/152.png
./images/153.png
./images/154.png
./images/155.png
./images/156.png
./images/157.png
./images/158.png
./images/159.png
./images/160.png
./images/161.png
./images/162.png
./images/163.png
./images/164.png
./images/165.png
./images/166.png
./images/167.png
./images/168.png
./images/169.png
./images/170.png
./images/171.png
./images/172.png
./images/173.png
./images/174.png
./images/175.png
./images/176.png
./images/177.png
./images/178.png
./images/179.png
./images/180.png
./images/181.png
./images/182.png
./images/183.png
./images/184.png
./images/185.png
./images/186.png
./images/187.png
./images/188.png
./images/189.png
./images/190.png
./images/191.png
./images/192.png
./images/193.png
./images/194.png
./images/195.png
./images/196.png
./images/197.png
./images/198.png
./images/199.png
./images/200.png
./images/201.png
./images/202.png
./images/203.png
./images/204.png
./images/205.png
./images/206.png
./images/207.png
./images/208.png
./images/209.png
./images/210.png
./images/211.png
./images/212.png
./images/213.png
./images/214.png
./images/215.png
./images/216.png
./images/217.png
./images/218.png
./images/219.png
./images/220.png
./images/221.png
./images/222.png
./images/223.png
./images/224.png
./images/225.png
./images/226.png
./images/227.png
./images/228.png
./images/229.png
./images/230.png
./images/231.png
./images/232.png
./images/233.png
./images/234.png
./images/235.png
./images/236.png
./images/237.png
./images/238.png
./images/239.png
./images/240.png
./images/241.png
./images/242.png
./images/243.png
./images/244.png
./images/245.png
./images/246.png
./images/247.png
./images/248.png
./images/249.png
./images/250.png
./images/251.png
./images/252.png
./images/253.png
./images/254.png
./images/255.png
./images/256.png
./images/257.png
./images/258.png
./images/259.png
./images/260.png
./images/261.png
./images/262.png
./images/263.png
./images/264.png
./images/265.png
./images/266.png
./images/267.png
./images/268.png
./images/269.png
./images/270.png
./images/271.png
./images/272.png
./images/273.png
./images/274.png
./images/275.png
./images/276.png
./images/277.png
./images/278.png
./images/279.png
./images/280.png
./images/281.png
./images/282.png
./images/283.png
./images/284.png
./images/285.png
./images/286.png
./images/287.png
./images/288.png
./images/289.png
./images/290.png
./images/291.png
./images/292.png
./images/293.png
./images/294.png
./images/295.png
./images/296.png
./images/297.png
./images/298.png
./images/299.png
./images/300.png
./images/301.png
./images/302.png
./images/303.png
./images/304.png
./images/305.png
./images/306.png
./images/307.png
./images/308.png
./images/309.png
./images/310.png
./images/311.png
./images/312.png
./images/313.png
./images/314.png
./images/315.png
./images/316.png
./images/317.png
./images/318.png
./images/319.png
./images/320.png
./images/321.png
./images/322.png
./images/323.png
./images/324.png
./images/325.png
./images/326.png
./images/327.png
./images/328.png
./images/329.png
./images/330.png
./images/331.png
./images/332.png
./images/333.png
./images/334.png
./images/335.png
./images/336.png
./images/337.png
./images/338.png
./images/339.png
./images/340.png
./images/341.png
./images/342.png
./images/343.png
./images/344.png
./images/345.png
./images/346.png
./images/347.png
./images/348.png
./images/349.png
./images/350.png
./images/351.png
./images/352.png
./images/353.png
./images/354.png
./images/355.png
./images/356.png
./images/357.png
./images/358.png
./images/359.png
./images/360.png
./images/361.png
./images/362.png
./images/363.png
./images/364.png
./images/365.png
./images/366.png
./images/367.png
./images/368.png
./images/369.png
./images/370.png
./images/371.png
./images/372.png
./images/373.png
./images/374.png
./images/375.png
./images/376.png
./images/377.png
./images/378.png
./images/379.png
./images/380.png
./images/381.png
./images/382.png
./images/383.png
./images/384.png
./images/385.png
./images/386.png
./images/387.png
./images/388.png
./images/389.png
./images/390.png
./images/391.png
./images/392.png
./images/393.png
./images/394.png
./images/395.png
./images/396.png
./images/397.png
./images/398.png
./images/399.png
./images/400.png
./images/401.png
./images/402.png
./images/403.png
./images/404.png
./images/405.png
./images/406.png
./images/407.png
./images/408.png
./images/409.png
./images/410.png
./images/411.png
./images/412.png
./images/413.png
./images/414.png
./images/415.png
./images/416.png
./images/417.png
./images/418.png
./images/419.png
./images/420.png
./images/421.png
./images/422.png
./images/423.png
./images/424.png
./images/425.png
./images/426.png
./images/427.png
./images/428.png
./images/429.png
./images/430.png
./images/431.png
./images/432.png
./images/433.png
./images/434.png
./images/435.png
./images/436.png
./images/437.png
./images/438.png
./images/439.png
./images/440.png
./images/441.png
./images/442.png
./images/443.png
./images/444.png
./images/445.png
./images/446.png
./images/447.png
./images/448.png
./images/449.png
./images/450.png
./images/451.png
./images/452.png
./images/453.png
./images/454.png
./images/455.png
./images/456.png
./images/457.png
./images/458.png
./images/459.png
./images/460.png
./images/461.png
./images/462.png
./images/463.png
./images/464.png
./images/465.png
./images/466.png
./images/467.png
./images/468.png
./images/469.png
./images/470.png
./images/471.png
./images/472.png
./images/473.png
./images/474.png
./images/475.png
./images/476.png
./images/477.png
./images/478.png
./images/479.png
./images/480.png
./images/481.png
./images/482.png
./images/483.png
./images/484.png
./images/485.png
./images/486.png
./images/487.png
./images/488.png
./images/489.png
./images/490.png
./images/491.png
./images/492.png
./images/493.png
./images/494.png
./images/495.png
./images/496.png
./images/497.png
./images/498.png
./images/499.png
./images/500.png
./images/501.png
./images/502.png
./images/503.png
./images/504.png
./images/505.png
./images/506.png
./images/507.png
./images/508.png
./images/509.png
./images/510.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 469;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  
  gsap.to("#page4",{
    scrollTrigger:{
      trigger:`#page4`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })

  gsap.to("#page5",{
    scrollTrigger:{
      trigger:`#page5`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })

  gsap.to("#page6",{
    scrollTrigger:{
      trigger:`#page6`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })

  gsap.to("#page7",{
    scrollTrigger:{
      trigger:`#page7`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })

  gsap.to("#footer",{
    scrollTrigger:{
      trigger:`#footer`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })

}
  canvas();

  function loaderAnim(){
    // Gsap LOader Animation
    gsap.to("#loader img",{
        rotate: 360,
        duration: 2,
        repeat: -1
    })
    gsap.to("#loader",{
        opacity: 0,
        duration: 4
    })
}
loaderAnim();