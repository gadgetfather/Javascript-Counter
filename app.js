const countdown = ()=>{
    const countDate = new Date ("May 6,2022 00:00:00").getTime()
    const currentDate = new Date().getTime()
    let gap = countDate- currentDate
    // console.log(gap)

    const second = 1000;
    const minute = second*60;
    const hour = minute *60;
    const day = hour*24;

    const textDay = Math.floor(gap/day)
    const textHour = Math.floor((gap%day)/hour)
    const textMin = Math.floor((gap%hour)/minute)
    const textsecond = Math.floor((gap%minute)/second)
    

    document.querySelector(".day").textContent = textDay
    document.querySelector(".hour").textContent = textHour
    document.querySelector(".minute").textContent = textMin
    document.querySelector(".second").textContent = textsecond
}

setInterval(countdown,1000)