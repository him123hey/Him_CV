$(document).ready(function () {
    database.collection("cv").get().then((data) => {
        var result = "";
        data.forEach(element => {
            result += `
            <div class="row bg-dark text-white">
                <div class="col-md-4 col-sm-12" id="cover-profile">
                    <div id="profile"></div>
                </div>
                <div class="col-md-8 col-sm-12 p-3" id="about">
                    <h2>About Me</h2>
                    <h6>${element.data().aboutMe}</h6>
                </div>
            </div>
            <div class="row" id="position">
                <div class="col-md-4 col-sm-12 p-4 text-white">
                    <h5>Apply for: ${element.data().position}</h5>
                </div>
                <div class="col-md-4"></div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12 text-white p-3" id="contact">
                    <h5>Contact Me</h5>
                    <h6><i class="large material-icons m-3">contact_mail</i>${element.data().email}</h6>
                    <h6><i class="large material-icons m-3">contact_phone</i>${element.data().phone}</h6>
                    <h6><i class="large material-icons m-3">location_on</i>${element.data().location}</h6>
                </div>
                <div class="col-md-8 col-sm-12 p-3">
                    <h5>Education Background</h5>
                    <h6>2018 - Present: </h6> ${element.data().present} 
                    <h6>2015 - 2018: </h6> ${element.data().highSchool} 
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12 text-white p-3" id="hardSkill">
                    <h5>Hard Skill</h5>
                    <h6>HTML && CSS</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width:80%"></div>
                    </div>
                    <h6>PHP</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width:50%"></div>
                    </div>
                    <h6>Laravel</h6>
                    <div class="progress">
                            <div class="progress-bar" style="width:60%"></div>
                    </div>
                    <h6>JavaScript</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width:70%"></div>
                    </div>
                    <h6>Design</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width:60%"></div>
                    </div>
                    <h6>Java</h6>
                    <div class="progress">
                        <div class="progress-bar" style="width:40%"></div>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12 p-3">
                    <h5>Work Experiences</h5>
                    <h6>June 13, 2019 – July 01,2019:  Virtual Company 1 (VC1)</h6>
                    <ul>
                        <li>${element.data().VC1SNA}</li>
                        <li>${element.data().VC1WEB}</li>
                    </ul>
                    <h6>Soon in May 2019 : Soon in May 2019, I will practice on Virtual Company II</h6>
                    <ul>
                        <li>${element.data().VC2P1}</li>
                        <li>${element.data().VC2P2}</li>
                        <li>${element.data().VC2P3}</li>
                        <li>${element.data().VC2P4}</li>
                        <li>${element.data().VC2P5}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12 text-white p-3" id="language">
                    <h5>Language</h5>
                    <h6>Khmer: ${element.data().khmer}</h6>
                    <h6>English: ${element.data().english}</h6>
                </div>
                <div class="col-md-8 col-sm-12 p-3">
                    <h5>Soft-Skill</h5>
                    ${element.data().softSkill}
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12 text-white p-3" id="interest">
                    <h5>Interest</h5>
                    <ul>
                        <h6><li>${element.data().interest1}</li></h6>
                        <h6><li>${element.data().interest}</li></h6>
                        <h6><li>${element.data().interest2}</li></h6>
                    </ul>
                </div>
                <div class="col-md-8 col-sm-12 p-3">
                    <h5>Refferences</h5>
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <h6>Name: ${element.data().ReferencesName}</h6>
                            <h6>Position: ${element.data().ReferencePosition}</h6>
                            <h6>Office: ${element.data().ReferenceOffice}</h6>
                            <h6>Phone Number: ${element.data().ReferencePhone}</h6>
                            <h6>Email: ${element.data().ReferencesEmail}</h6>
                        </div>
                        <div class="col-md-6" col-sm-12 id="references-border">
                            <h6>Name: ${element.data().ReferencesName1}</h6>
                            <h6>Position: ${element.data().ReferencePosition1}</h6>
                            <h6>Office: ${element.data().ReferenceOffice}</h6>
                            <h6>Phone Number: ${element.data().ReferencePhone1}</h6>
                            <h6>Email: ${element.data().ReferencesEmail1}</h6>
                        </div>
                    </div>
                </div>
            </div>
            `
        });
        $("#result").append(result);
    });
});