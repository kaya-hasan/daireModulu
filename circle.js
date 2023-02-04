const circleArea = (radius) => {
    let area = Math.PI * radius * radius;
    console.log(`Yaricapi ${radius} olan dairenin alani: ${area}`);
}


const circleCircumference = (radius) => {
    let circumFerence = Math.PI * radius * 2
    console.log(`Yaricapi ${radius} olan dairenin cevresi: ${circumFerence}`);
}

module.exports = {
    circleArea,
    circleCircumference
}