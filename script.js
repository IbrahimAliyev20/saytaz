const deyer = document.getElementById("deyer")
const statkValue = document.getElementById("statkValue")
const umumiValue = document.getElementById("umumiValue")
const elaveler = document.getElementById("elaveler")
const seo = document.getElementById("seo")
const eticaret = document.getElementById("eticaret")
const logodizayn = document.getElementById("logodizayn")
const logodiz = document.getElementById("logodiz")

let artsn = 0
let artsin1 = 0
let artsin2 = 0
let artsin3 = 0
let artsin4 = 0

function show() {
    let toplam = artsn + artsin1 + artsin2 + artsin3 + artsin4;
    umumiValue.innerHTML = toplam
}

inpt1.addEventListener('input', function () {
    let artsn = inpt1.value * 100;
    deyer.innerHTML = statkValue.innerHTML = artsn;
    show();
})
inpt2.addEventListener('input', function () {

    let artsn = inpt2.value * 100;
    deyer.innerHTML = statkValue.innerHTML = artsn;
    show();
})
xana.addEventListener('change', function () {
    if (xana.checked) {
        artsin1 += 200;
    } else {
        artsin1 -= 200;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana1.addEventListener('change', function () {
    if (xana1.checked) {
        artsin1 += 400;
    } else {
        artsin1 -= 400;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana2.addEventListener('change', function () {
    if (xana2.checked) {
        artsin1 += 100;
    } else {
        artsin1 -= 100;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana3.addEventListener('change', function () {
    if (xana3.checked) {
        artsin1 += 400;
    } else {
        artsin1 -= 400;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana4.addEventListener('change', function () {
    if (xana4.checked) {
        artsin1 += 50;
    } else {
        artsin1 -= 50;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana5.addEventListener('change', function () {
    if (xana5.checked) {
        artsin1 += 50;
    } else {
        artsin1 -= 50;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana6.addEventListener('change', function () {
    if (xana6.checked) {
        artsin1 += 100;
    } else {
        artsin1 -= 100;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana7.addEventListener('change', function () {
    if (xana7.checked) {
        artsin1 += 100;
    } else {
        artsin1 -= 100;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana8.addEventListener('change', function () {
    if (xana8.checked) {
        artsin1 += 100;
    } else {
        artsin1 -= 100;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana9.addEventListener('change', function () {
    if (xana9.checked) {
        artsin1 += 100;
    } else {
        artsin1 -= 100;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana10.addEventListener('change', function () {
    if (xana10.checked) {
        artsin1 += 400;
    } else {
        artsin1 -= 400;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana11.addEventListener('change', function () {
    if (xana11.checked) {
        artsin1 += 50;
    } else {
        artsin1 -= 50;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana12.addEventListener('change', function () {
    if (xana12.checked) {
        artsin1 += 50;
    } else {
        artsin1 -= 50;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana13.addEventListener('change', function () {
    if (xana13.checked) {
        artsin1 += 300;
    } else {
        artsin1 -= 300;
    }
    chechkboxxerc.innerHTML = elaveler.innerHTML = artsin1;
    show()
});
xana111.addEventListener('change', function () {
    if (xana111.checked) {
        artsin += 200;
    } else {
        artsin -= 200;
    }
    seo.innerHTML = chechkxerc.innerHTML = artsin;
    show()
});
xana222.addEventListener('change', function () {
    if (xana222.checked) {
        artsin2 += 300;
    } else {
        artsin2 -= 300;
    }
    seo.innerHTML = chechkxerc.innerHTML = artsin2;
    show()
});
xana333.addEventListener('change', function () {
    if (xana333.checked) {
        artsin2 += 300;
    } else {
        artsin2 -= 300;
    }
    seo.innerHTML = chechkxerc.innerHTML = artsin2;
    show()
});
xana444.addEventListener('change', function () {
    if (xana444.checked) {
        artsin2 += 100;
    } else {
        artsin2 -= 100;
    }
    seo.innerHTML = chechkxerc.innerHTML = artsin2;
    show()
});
xana555.addEventListener('change', function () {
    if (xana555.checked) {
        artsin2 += 100;
    } else {
        artsin2 -= 100;
    }
    seo.innerHTML = chechkxerc.innerHTML = artsin2;
    show()
});
xana14.addEventListener('change', function () {
    if (xana14.checked) {
        artsin3 += 200;
    } else {
        artsin3 -= 200;
    }
    xercson.innerHTML = eticaret.innerHTML = artsin3;
    show()
});
xana15.addEventListener('change', function () {
    if (xana15.checked) {
        artsin3 += 300;
    } else {
        artsin3 -= 300;
    }
    xercson.innerHTML = eticaret.innerHTML = artsin3;
    show()
});
xana16.addEventListener('change', function () {
    if (xana16.checked) {
        artsin3 += 300;
    } else {
        artsin3 -= 300;
    }
    xercson.innerHTML = eticaret.innerHTML = artsin3;
    show()
});
xana17.addEventListener('change', function () {
    if (xana17.checked) {
        artsin3 += 500;
    } else {
        artsin3 -= 500;
    }
    xercson.innerHTML = eticaret.innerHTML = artsin3;
    show()
});
xana18.addEventListener('change', function () {
    if (xana18.checked) {
        artsin3 += 300;
    } else {
        artsin3 -= 300;
    }
    xercson.innerHTML = eticaret.innerHTML = artsin3;
    show()
});
xana19.addEventListener('change', function () {
    if (xana19.checked) {
        artsin3 += 200;
    } else {
        artsin3 -= 200;
    }
    xercson.innerHTML = eticaret.innerHTML = artsin3;
    show()
});
inpt3.addEventListener('input', function () {
    let artsn4 = inpt3.value * 100;
    logodizayn.innerHTML = logodiz.innerHTML = artsn4;
    show()
})
