const countdown = ()=>{
    const countDate = new Date ("May 6,2022 00:00:00").getTime()
    const currentDate = new Date().getTime()
    let gap = countDate- currentDate
    console.log(gap)
}
countdown()