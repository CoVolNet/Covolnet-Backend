module.exports = async function validation({name, location, district, volDay, phone, volTimes, communication, work, discord}){
    volTimes = volTimes[0].split('-')
    volTimes.forEach(element => 
        parseInt(element)
    );
    console.log(volTimes);
    return true
}
