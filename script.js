function generatePlan() {
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    const bmi = (weight / (height * height)).toFixed(2);
    let weightStatus = '';

    if (bmi < 18.5) {
        weightStatus = 'کم‌وزن';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        weightStatus = 'نرمال';
    } else if (bmi >= 25 && bmi < 29.9) {
        weightStatus = 'اضافه وزن';
    } else {
        weightStatus = 'چاق';
    }

    const output = `
        <h3>نتایج ارزیابی سلامت</h3>
        <p>نام: ${name}</p>
        <p>سن: ${age}</p>
        <p>BMI: ${bmi}</p>
        <p>وضعیت وزنی: ${weightStatus}</p>
        <h3>برنامه غذایی پیشنهادی</h3>
        ${generateDietPlan(bmi)}
    `;

    document.getElementById('planOutput').innerHTML = output;
    document.getElementById('planOutput').style.display = 'block';
    document.getElementById('openExercisePlan').style.display = 'block';
}


function generateDietPlan(bmi) {
    let diet = '';

    if (bmi < 18.5) {
        diet = `
            <h4>صبحانه:</h4>
            <ul>
                <li>یک وعده جو دوسر با شیر و میوه</li>
                <li>دو عدد تخم‌مرغ پخته با نان سبوس‌دار</li>
            </ul>
            <h4>نهار:</h4>
            <ul>
                <li>سینه مرغ کبابی با برنج قهوه‌ای و سبزیجات بخارپز</li>
                <li>ماهی سرخ‌شده با کینوا و سالاد سبزیجات</li>
            </ul>
            <h4>شام:</h4>
            <ul>
                <li>خوراک گوشت قرمز با سیب‌زمینی شیرین و بروکلی</li>
                <li>خوراک مرغ با سبزیجات و کوینوا</li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        diet = `
            <h4>صبحانه:</h4>
            <ul>
                <li>یک وعده ماست با میوه و عسل</li>
                <li>نان تست با آووکادو و تخم‌مرغ</li>
            </ul>
            <h4>نهار:</h4>
            <ul>
                <li>سالاد کینوا با سبزیجات و پروتئین</li>
                <li>خوراک مرغ با سبزیجات و برنج قهوه‌ای</li>
            </ul>
            <h4>شام:</h4>
            <ul>
                <li>ماهی پخته با سبزیجات بخارپز و سیب‌زمینی</li>
                <li>پاستا با سبزیجات و سس کم‌چرب</li>
            </ul>
        `;
    } else if (bmi >= 25 && bmi < 29.9) {
        diet = `
            <h4>صبحانه:</h4>
            <ul>
                <li>آب‌میوه طبیعی با غلات سبوس‌دار</li>
                <li>پنکیک با میوه</li>
            </ul>
            <h4>نهار:</h4>
            <ul>
                <li>خوراک سبزیجات با کینوآ</li>
                <li>سالاد با پروتئین کم‌چرب</li>
            </ul>
            <h4>شام:</h4>
            <ul>
                <li>خوراک گوشت قرمز با سبزیجات و برنج قهوه‌ای</li>
                <li>سوپ سبزیجات با نان سبوس‌دار</li>
            </ul>
        `;
    } else {
        diet = `
            <h4>صبحانه:</h4>
            <ul>
                <li>چای سبز با یک تکه میوه</li>
                <li>پنکیک سبوس‌دار با توت‌فرنگی</li>
            </ul>
            <h4>نهار:</h4>
            <ul>
                <li>سالاد سبزیجات با پروتئین کم‌چرب و سس کم‌چرب</li>
                <li>خوراک کدو با مرغ</li>
            </ul>
            <h4>شام:</h4>
            <ul>
                <li>خوراک سبزیجات بخارپز با کینوا</li>
                <li>ماهی پخته با سبزیجات</li>
            </ul>
        `;
    }

    return diet;
}

function showExercisePlan() {
    const bmi = parseFloat(document.getElementById('weight').value) / ((parseFloat(document.getElementById('height').value) / 100) ** 2);

    const newWindow = window.open("", "_blank", "width=600,height=400");
    newWindow.document.write(`
        <html>
            <head>
                <title>برنامه ورزشی تخصصی</title>
                <link rel="stylesheet" href="style.css">
                <style>
                    body { font-family: Arial, sans-serif; direction: rtl; padding: 20px; }
                    h2 { color: #4CAF50; }
                    ul { padding: 0; list-style: none; }
                    ul li { margin-bottom: 10px; }
                </style>
            </head>
            <body>
                <h2>برنامه ورزشی تخصصی</h2>
                <p>BMI شما: ${bmi.toFixed(2)}</p>
                ${generateExercisePlan(bmi)}
            </body>
        </html>
    `);
}

function generateExercisePlan(bmi) {
    let plan = '';

    if (bmi < 18.5) {
        plan = `
            <ul>
                <li>ورزش‌های کششی و استقامتی سبک برای افزایش عضله‌سازی</li>
                <li>پیاده‌روی سریع به مدت 20-30 دقیقه</li>
                <li>تمرینات سبک با وزنه (2-3 بار در هفته)</li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        plan = `
            <ul>
                <li>دویدن یا دوچرخه‌سواری به مدت 30-40 دقیقه</li>
                <li>تمرینات قدرتی (3 بار در هفته)</li>
                <li>تمرینات هوازی سبک</li>
            </ul>
        `;
    } else if (bmi >= 25 && bmi < 29.9) {
        plan = `
            <ul>
                <li>دویدن ملایم یا پیاده‌روی سریع (4-5 بار در هفته)</li>
                <li>تمرینات استقامتی و تقویت عضلات مرکزی بدن</li>
                <li>کاهش مدت نشستن طولانی و انجام تمرینات متناوب</li>
            </ul>
        `;
    } else {
        plan = `
            <ul>
                <li>پیاده‌روی روزانه به مدت 40-50 دقیقه</li>
                <li>تمرینات قدرتی سبک برای کاهش وزن</li>
                <li>حرکات کششی و استقامتی (5 روز در هفته)</li>
            </ul>
        `;
    }

    return plan;
}
