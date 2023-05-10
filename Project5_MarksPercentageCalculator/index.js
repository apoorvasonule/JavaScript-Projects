const calculateFormEl =  document.getElementById("calculateform");
const resultEl =  document.getElementById("result");

const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();

    const formData = new FormData(calculateFormEl);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = +value;
    });

    const totalMarks = data.maths + data.english + data.hindi + data.science;

    const percentage = Math.floor((totalMarks/maxMarks) *100).toFixed(2);

    resultEl.innerText = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%.`; 
};