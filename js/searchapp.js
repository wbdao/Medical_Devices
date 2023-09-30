let arr1 = Stethoscope.array.concat(Sphygmomanometer.array, BloodPressureMonitors.array, MedicalThermometer.array, BloodGlucoseMeter.array, LancingDevice.array);
let arr2 = Ambulances.array.concat(Stretcher_trolleys.array);
let arr3 = NeonatalIncubator.array.concat(InfantRadiantWarmer.array, InfantPhototherapyLamp.array);
let arr4 = StressTestEquipment.array.concat(TreadmillRrgometer.array);
let arr5 = ArtificialHearts.array.concat(ValveProsthesis.array, AnnuloplastyRing.array);
let arr6 = EEGSystem.array.concat(TranscranialDoppler.array, Electromyograph.array);
let arr7 = PatellaProsthesis.array.concat(MeniscusImplant.array);
let arr8 = DiscProsthesis.array.concat(Vertebral.array);
let allArray = arr1.concat(arr2, arr3, arr4, arr5, arr6, arr7, newProduct, arr8);
localStorage.setItem('allarray', JSON.stringify(allArray));
// function of search app

function search(title, myArray) {
    let sarr = myArray.filter((item) => item.title.indexOf(title) !== -1);
    localStorage.setItem("searchArray", JSON.stringify(sarr));
}

function searchapps() {
    let input1 = document.getElementById('search2');
    search(input1.value, JSON.parse(localStorage.getItem('allarray')));
    let key = input1.value;
    localStorage.setItem("keywords", key);
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            searchResultPage();
        }
    })
}

function searchapps2() {
    let input2 = document.getElementById('search');
    search(input2.value, JSON.parse(localStorage.getItem('allarray')));
    let key = input2.value;
    localStorage.setItem("keywords", key);
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
            searchResultPage();
        }
    })
}