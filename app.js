const gradePoints = {"A+":4.3,A:4,"A-":3.7,"B+":3.3,B:3,"B-":2.7,"C+":2.3,C:2,"C-":1.7,"D+":1.3,D:1,F:0,"-":null,Pass:null};
const gradeBands = [
  {grade:"A+", min:90},
  {grade:"A", min:85},
  {grade:"A-", min:80},
  {grade:"B+", min:75},
  {grade:"B", min:70},
  {grade:"B-", min:65},
  {grade:"C+", min:60},
  {grade:"C", min:55},
  {grade:"C-", min:50},
  {grade:"D+", min:45},
  {grade:"D", min:40},
  {grade:"F", min:0}
];
const plannerThemes = {
  porcelain:{label:"Porcelain Blue", vibe:"glacier blue, silver, quiet focus", colors:{primary:"#4b7fac", canvas:"#f2f8ff", panel:"rgba(255,255,255,0.66)", panelStrong:"rgba(255,255,255,0.88)", tint:"#dbefff", quiz:"#9b6bdf", assignment:"#3f94df", homework:"#f3b85c", project:"#8670d8", attendance:"#20b7a7", reading:"#22a891", projected:"#256fa5", lecture:"#6da3c8", tutorial:"#a084c9", courseBlock:"#66b8a6"}},
  buttercream:{label:"Buttercream Light", vibe:"fresh butter, pearl, bright mood", colors:{primary:"#ecc94b", canvas:"#fffdf2", panel:"rgba(255,255,255,0.7)", panelStrong:"rgba(255,255,255,0.9)", tint:"#fff6c7", quiz:"#ec7fac", assignment:"#4f9be4", homework:"#ffd766", project:"#b38ff0", attendance:"#20bfa6", reading:"#62c98f", projected:"#4f83c2", lecture:"#7bb5ce", tutorial:"#c4a0dd", courseBlock:"#8ccf9c"}},
  matcha:{label:"Matcha Glass", vibe:"tea green, mineral, steady energy", colors:{primary:"#70a889", canvas:"#f4fbf5", panel:"rgba(255,255,255,0.68)", panelStrong:"rgba(255,255,255,0.9)", tint:"#dff3e7", quiz:"#c36ba0", assignment:"#4f9fdd", homework:"#f4cc63", project:"#8f76d8", attendance:"#28b989", reading:"#35aa75", projected:"#347a62", lecture:"#72b29a", tutorial:"#9f88c8", courseBlock:"#c4b75d"}},
  sakura:{label:"Sakura Frost", vibe:"petal pink, ice white, gentle lift", colors:{primary:"#d787a5", canvas:"#fff6fa", panel:"rgba(255,255,255,0.7)", panelStrong:"rgba(255,255,255,0.91)", tint:"#fce3ec", quiz:"#e66ca4", assignment:"#5f9ce0", homework:"#ffc166", project:"#ad86e8", attendance:"#20b8a2", reading:"#58bea2", projected:"#a96386", lecture:"#83a8cf", tutorial:"#d787a5", courseBlock:"#78bfae"}},
  gallery:{label:"Gallery Mono", vibe:"museum white, ink, one red accent", colors:{primary:"#b0122a", canvas:"#fbfbf8", panel:"rgba(255,255,255,0.74)", panelStrong:"rgba(255,255,255,0.92)", tint:"#f3f6fb", quiz:"#b85aa0", assignment:"#3f8ed8", homework:"#efc54f", project:"#7f71d9", attendance:"#21ad9a", reading:"#35a57d", projected:"#2f6f9e", lecture:"#6d879f", tutorial:"#9b83ad", courseBlock:"#6e9b89"}}
};
const lecturePatterns = [
  {course:"ECON1210",kind:"lecture",title:"Introductory Microeconomics",location:"LE5",start:"09:00",end:"09:50",dates:["2026-09-01","2026-09-08","2026-09-15","2026-09-22","2026-09-29","2026-10-06","2026-10-20","2026-10-27","2026-11-03","2026-11-10","2026-11-17","2026-11-24"],source:"Synced from Class Schedule.ics"},
  {course:"ECON1210",kind:"lecture",title:"Introductory Microeconomics",location:"KKLG109",start:"09:00",end:"10:50",dates:["2026-09-03","2026-09-10","2026-09-17","2026-09-24","2026-10-08","2026-10-22","2026-10-29","2026-11-05","2026-11-12","2026-11-19","2026-11-26"],source:"Synced from Class Schedule.ics"},
  {course:"ECON1220",kind:"lecture",title:"Introductory Macroeconomics",location:"LE6",start:"09:00",end:"11:50",dates:["2026-09-07","2026-09-14","2026-09-21","2026-09-28","2026-10-05","2026-10-26","2026-11-02","2026-11-09","2026-11-16","2026-11-23","2026-11-30"],source:"Synced from Class Schedule.ics"},
  {course:"CCST9090",kind:"lecture",title:"Mindscapes",location:"MB167",start:"17:00",end:"18:50",dates:["2026-09-02","2026-09-09","2026-09-16","2026-09-23","2026-09-30","2026-10-07","2026-10-21","2026-10-28","2026-11-04","2026-11-11","2026-11-18","2026-11-25"],source:"Synced from Class Schedule.ics"},
  {course:"HUDT1001",kind:"lecture",title:"Digital skills I",location:"LG009",start:"12:00",end:"12:50",dates:["2026-09-03","2026-09-10","2026-09-17","2026-09-24","2026-10-08","2026-10-22","2026-10-29","2026-11-05","2026-11-12","2026-11-19","2026-11-26"],source:"Synced from Class Schedule.ics"},
  {course:"HUDT1001",kind:"lecture",title:"Digital skills I",location:"LG059",start:"13:00",end:"14:50",dates:["2026-09-07","2026-09-14","2026-09-21","2026-09-28","2026-10-05","2026-10-26","2026-11-02","2026-11-09","2026-11-16","2026-11-23","2026-11-30"],source:"Synced from Class Schedule.ics"},
  {course:"PHIL1012",kind:"lecture",title:"Mind and Knowledge",location:"LG010",start:"13:00",end:"14:50",dates:["2026-09-03","2026-09-10","2026-09-17","2026-09-24","2026-10-08","2026-10-22","2026-10-29","2026-11-05","2026-11-12","2026-11-19","2026-11-26"],source:"Synced from Class Schedule.ics"}
];
const tutorialPatterns = [
  {course:"CCST9090",kind:"tutorial",title:"Special tutorial sessions",location:"MB235",start:"11:00",end:"12:50",dates:["2026-09-15","2026-10-06","2026-11-03","2026-11-17"],source:"CCST course guide: Tuesday tutorial dates only."},
  {course:"PHIL1012",kind:"tutorial",title:"Tutorial participation sessions",location:"MWT5",start:"15:00",end:"15:50",dates:["2026-09-14","2026-09-28","2026-10-05","2026-11-02","2026-11-16"],source:"PHIL course guide: five tutorials."},
  {course:"ECON1210",kind:"tutorial",title:"Introductory Microeconomics tutorial",location:"MB121",start:"14:00",end:"14:50",dates:["2026-09-16","2026-09-23","2026-09-30","2026-10-07","2026-10-21","2026-10-28","2026-11-04","2026-11-11","2026-11-18","2026-11-25"],source:"Tutorial location updated by user to MB121."},
  {course:"ECON1220",kind:"tutorial",title:"Introductory Macroeconomics tutorial",location:"KK1327",start:"15:00",end:"15:50",dates:["2026-09-16","2026-09-23","2026-09-30","2026-10-07","2026-10-21","2026-10-28","2026-11-04","2026-11-11","2026-11-18","2026-11-25"],source:"Tutorial slot from class calendar screenshot."}
];
const courseBlockPatterns = [
  {course:"AILT1001",kind:"course",title:"Artificial Intelligence Literacy I",location:"HKU-CDS Teaching and Research Site, Shanghai",start:"09:30",end:"17:00",dates:["2026-10-12","2026-10-13","2026-10-14","2026-10-15","2026-10-16"],source:"AILT1001 Shanghai schedule: course runs Oct 12-16; Oct 11 and Oct 17 are travel days."}
];
const academicCalendarEvents = [
  {date:"2026-09-01",label:"Sem 1 starts",type:"academic"},
  {date:"2026-09-26",label:"Mid-Autumn",type:"holiday"},
  {date:"2026-10-01",label:"National Day",type:"holiday"},
  {date:"2026-10-12",label:"Reading Week",type:"reading"},
  {date:"2026-10-13",label:"Reading Week",type:"reading"},
  {date:"2026-10-14",label:"Reading Week",type:"reading"},
  {date:"2026-10-15",label:"Reading Week",type:"reading"},
  {date:"2026-10-16",label:"Reading Week",type:"reading"},
  {date:"2026-10-17",label:"Reading Week",type:"reading"},
  {date:"2026-10-19",label:"Chung Yeung",type:"holiday"},
  {date:"2026-11-30",label:"Teaching ends",type:"academic"},
  {date:"2026-12-01",label:"Revision",type:"revision"},
  {date:"2026-12-02",label:"Revision",type:"revision"},
  {date:"2026-12-03",label:"Revision",type:"revision"},
  {date:"2026-12-04",label:"Revision",type:"revision"},
  {date:"2026-12-05",label:"Revision",type:"revision"},
  {date:"2026-12-07",label:"Assessment",type:"assessment"},
  {date:"2026-12-08",label:"Assessment",type:"assessment"},
  {date:"2026-12-09",label:"Assessment",type:"assessment"},
  {date:"2026-12-10",label:"Assessment",type:"assessment"},
  {date:"2026-12-11",label:"Assessment",type:"assessment"},
  {date:"2026-12-12",label:"Assessment",type:"assessment"},
  {date:"2026-12-13",label:"Assessment",type:"assessment"},
  {date:"2026-12-14",label:"Assessment",type:"assessment"},
  {date:"2026-12-15",label:"Assessment",type:"assessment"},
  {date:"2026-12-16",label:"Assessment",type:"assessment"},
  {date:"2026-12-17",label:"Assessment",type:"assessment"},
  {date:"2026-12-18",label:"Assessment",type:"assessment"},
  {date:"2026-12-19",label:"Assessment",type:"assessment"},
  {date:"2026-12-20",label:"Assessment",type:"assessment"},
  {date:"2026-12-21",label:"Assessment",type:"assessment"},
  {date:"2026-12-22",label:"Assessment",type:"assessment"},
  {date:"2026-12-23",label:"Assessment",type:"assessment"},
  {date:"2026-12-24",label:"HKU half-day",type:"holiday"},
  {date:"2026-12-25",label:"Christmas",type:"holiday"},
  {date:"2026-12-26",label:"Christmas break",type:"holiday"},
  {date:"2026-12-31",label:"HKU half-day",type:"holiday"},
  {date:"2027-01-01",label:"New Year",type:"holiday"},
  {date:"2027-01-18",label:"Sem 2 starts",type:"academic"},
  {date:"2027-02-05",label:"HKU half-day",type:"holiday"},
  {date:"2027-02-06",label:"LNY break",type:"holiday"},
  {date:"2027-02-07",label:"LNY break",type:"holiday"},
  {date:"2027-02-08",label:"LNY Day 3",type:"holiday"},
  {date:"2027-02-09",label:"LNY Day 4",type:"holiday"},
  {date:"2027-02-10",label:"LNY break",type:"holiday"},
  {date:"2027-02-11",label:"LNY break",type:"holiday"},
  {date:"2027-02-12",label:"LNY break",type:"holiday"},
  {date:"2027-03-08",label:"Reading Week",type:"reading"},
  {date:"2027-03-09",label:"Reading Week",type:"reading"},
  {date:"2027-03-10",label:"Reading Week",type:"reading"},
  {date:"2027-03-11",label:"Reading Week",type:"reading"},
  {date:"2027-03-12",label:"Reading Week",type:"reading"},
  {date:"2027-03-13",label:"Reading Week",type:"reading"},
  {date:"2027-03-16",label:"HKU holiday",type:"holiday"},
  {date:"2027-03-26",label:"Good Friday",type:"holiday"},
  {date:"2027-03-27",label:"Good Friday +1",type:"holiday"},
  {date:"2027-03-29",label:"Easter Mon",type:"holiday"},
  {date:"2027-04-05",label:"Ching Ming",type:"holiday"},
  {date:"2027-04-30",label:"Teaching ends",type:"academic"},
  {date:"2027-05-01",label:"Labour Day",type:"holiday"},
  {date:"2027-05-03",label:"Revision",type:"revision"},
  {date:"2027-05-04",label:"Revision",type:"revision"},
  {date:"2027-05-05",label:"Revision",type:"revision"},
  {date:"2027-05-06",label:"Revision",type:"revision"},
  {date:"2027-05-07",label:"Revision",type:"revision"},
  {date:"2027-05-08",label:"Assessment",type:"assessment"},
  {date:"2027-05-09",label:"Assessment",type:"assessment"},
  {date:"2027-05-10",label:"Assessment",type:"assessment"},
  {date:"2027-05-11",label:"Assessment",type:"assessment"},
  {date:"2027-05-12",label:"Assessment",type:"assessment"},
  {date:"2027-05-13",label:"Buddha Day",type:"holiday"},
  {date:"2027-05-14",label:"Assessment",type:"assessment"},
  {date:"2027-05-15",label:"Assessment",type:"assessment"},
  {date:"2027-05-16",label:"Assessment",type:"assessment"},
  {date:"2027-05-17",label:"Assessment",type:"assessment"},
  {date:"2027-05-18",label:"Assessment",type:"assessment"},
  {date:"2027-05-19",label:"Assessment",type:"assessment"},
  {date:"2027-05-20",label:"Assessment",type:"assessment"},
  {date:"2027-05-21",label:"Assessment",type:"assessment"},
  {date:"2027-05-22",label:"Assessment",type:"assessment"},
  {date:"2027-05-23",label:"Assessment",type:"assessment"},
  {date:"2027-05-24",label:"Assessment",type:"assessment"},
  {date:"2027-05-25",label:"Assessment",type:"assessment"},
  {date:"2027-06-09",label:"Tuen Ng",type:"holiday"},
  {date:"2027-06-28",label:"Summer starts",type:"academic"},
  {date:"2027-07-01",label:"HKSAR Day",type:"holiday"},
  {date:"2027-08-21",label:"Summer ends",type:"academic"}
];
const dashboardHorizonDays = 7;
function expandClassPatterns(patterns) {
  return patterns.flatMap(pattern => pattern.dates.map(date => {
    const {dates, ...meeting} = pattern;
    return {id:crypto.randomUUID(),date,...meeting};
  }));
}
const verifiedSeed = {
  notes:"Verified from HKU Moodle on 22 Sept 2026, then updated from the uploaded course documents. Current courses are AILT1001, CCST9090, ECON1210, ECON1220, HUDT1001, and PHIL1012. AASO_FORUM appeared in Moodle but is an advising shell, not a course, so it is not counted here. ECON1210 [Common] is the shared assessment channel for ECON1210. AILT1001 Artificial Intelligence Literacy I is 3 credits, pass/fail; check-in is Oct 11, course sessions run Oct 12-16, and check-out is Oct 17. All other credit-bearing courses are set to 6 credits. User entered CCST Quiz 1 = 3/4. ECON1210 weekly assignments are modeled as 11 quizzes with the best 9 counted inside the 20% assignment category. ECON1220 homework/exercises are modeled as 4 assignments inside the 20% homework category. CCST9090 quiz rows follow the course quiz schedule and together count inside the 20% quiz category. PHIL1012 tutorial participation is split across five tutorials inside the 20% tutorial category. HUDT1001 homework is left as one category because the syllabus says homework is submitted after each session but does not give item weights.",
  courses:[
    {id:crypto.randomUUID(),code:"AILT1001",title:"Artificial Intelligence Literacy I [Section 1SH, 2026]",credits:3,target:"Pass",targetPercent:0,plan:"Pass/fail - check-in Oct 11, course Oct 12-16, check-out Oct 17",passFail:true},
    {id:crypto.randomUUID(),code:"ECON1220",title:"Introductory Macroeconomics [Section 1F, 2026]",credits:6,target:"A",targetPercent:85,plan:"",passFail:false},
    {id:crypto.randomUUID(),code:"ECON1210",title:"Introductory Microeconomics [Section 1A, 2026] - Si Chen subclass",credits:6,target:"A",targetPercent:85,plan:"",passFail:false},
    {id:crypto.randomUUID(),code:"CCST9090",title:"Mindscapes: Psychiatry and Mental Health Across Creative and Scientific Frontiers [Section 1A, 2026]",credits:6,target:"A",targetPercent:85,plan:"Quiz category verified from Moodle: 20% total.",passFail:false},
    {id:crypto.randomUUID(),code:"HUDT1001",title:"Digital skills I [Section 1A, 2026]",credits:6,target:"A",targetPercent:85,plan:"",passFail:false},
    {id:crypto.randomUUID(),code:"PHIL1012",title:"Mind and knowledge: an introduction to philosophy [Section 1A, 2026]",credits:6,target:"A",targetPercent:85,plan:"",passFail:false}
  ],
  futureCourses:[],
  components:[
    {id:crypto.randomUUID(),course:"CCST9090",name:"Tutorial activities and attendance",weight:30,earned:"",max:100,source:"CCST9090 course outline: tutorial activities and attendance 30%."},
    {id:crypto.randomUUID(),course:"CCST9090",name:"Quiz 1",weight:5,earned:3,max:4,source:"Entered: 3/4. In-class quizzes are 20% total."},
    {id:crypto.randomUUID(),course:"CCST9090",name:"Remaining in-class quizzes",weight:15,earned:"",max:100,source:"CCST9090 course outline: remaining scheduled in-class quizzes 15%."},
    {id:crypto.randomUUID(),course:"CCST9090",name:"Midterm project",weight:10,earned:"",max:100,source:"CCST9090 course outline: midterm project 10%."},
    {id:crypto.randomUUID(),course:"CCST9090",name:"Final project",weight:40,earned:"",max:100,source:"CCST9090 course outline: final project 40%."},
    {id:crypto.randomUUID(),course:"ECON1210",name:"Weekly assignments",weight:20,earned:"",max:100,countBest:9,source:"ECON1210: 11 weekly quizzes; best 9 count for the 20% assignment category."},
    {id:crypto.randomUUID(),course:"ECON1210",name:"Midterm",weight:30,earned:"",max:100,source:"ECON1210 course outline: midterm 30%."},
    {id:crypto.randomUUID(),course:"ECON1210",name:"Final exam",weight:50,earned:"",max:100,source:"ECON1210 course outline: final exam 50%."},
    {id:crypto.randomUUID(),course:"ECON1220",name:"Homework / exercises",weight:20,earned:"",max:100,source:"ECON1220 course admin: 4 homework assignments worth 20% total."},
    {id:crypto.randomUUID(),course:"ECON1220",name:"Midterm exam",weight:30,earned:"",max:100,source:"ECON1220 syllabus/admin: term test or midterm exam 30%."},
    {id:crypto.randomUUID(),course:"ECON1220",name:"Final exam",weight:50,earned:"",max:100,source:"ECON1220 syllabus/admin: final exam 50%; final exam below 35% leads to F."},
    {id:crypto.randomUUID(),course:"HUDT1001",name:"Attendance and participation",weight:25,earned:"",max:100,source:"HUDT1001 syllabus: 25%."},
    {id:crypto.randomUUID(),course:"HUDT1001",name:"Hand-written in-class quiz 1",weight:15,earned:"",max:100,source:"HUDT1001 syllabus: 15%."},
    {id:crypto.randomUUID(),course:"HUDT1001",name:"Hand-written in-class quiz 2",weight:15,earned:"",max:100,source:"HUDT1001 syllabus: 15%."},
    {id:crypto.randomUUID(),course:"HUDT1001",name:"Hand-written in-class test",weight:30,earned:"",max:100,source:"HUDT1001 syllabus: 30%."},
    {id:crypto.randomUUID(),course:"HUDT1001",name:"Homework",weight:15,earned:"",max:100,source:"HUDT1001 syllabus: 15%."},
    {id:crypto.randomUUID(),course:"PHIL1012",name:"In-class test 1",weight:25,earned:"",max:100,source:"PHIL1012 course outline: first in-class test 25%."},
    {id:crypto.randomUUID(),course:"PHIL1012",name:"In-class test 2",weight:25,earned:"",max:100,source:"PHIL1012 course outline: second in-class test 25%."},
    {id:crypto.randomUUID(),course:"PHIL1012",name:"Term essay",weight:30,earned:"",max:100,source:"PHIL1012 course outline: term essay 30%."},
    {id:crypto.randomUUID(),course:"PHIL1012",name:"Tutorial participation",weight:20,earned:"",max:100,source:"PHIL1012 course outline: 5 tutorials together count 20%."}
  ],
  subcomponents:[
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 1",earned:"",max:100,waived:true,source:"Best 9 of 11 weekly quizzes count. Waived."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 2",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 3",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 4",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 5",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 6",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 7",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 8",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 9",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 10",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1210",category:"Weekly assignments",name:"Weekly quiz 11",earned:"",max:100,source:"Best 9 of 11 weekly quizzes count."},
    {id:crypto.randomUUID(),course:"ECON1220",category:"Homework / exercises",name:"Homework 1",earned:"",max:100,source:"ECON1220 admin: 4 assignments, two before and two after midterm."},
    {id:crypto.randomUUID(),course:"ECON1220",category:"Homework / exercises",name:"Homework 2",earned:"",max:100,source:"ECON1220 admin: 4 assignments, two before and two after midterm."},
    {id:crypto.randomUUID(),course:"ECON1220",category:"Homework / exercises",name:"Homework 3",earned:"",max:100,source:"ECON1220 admin: 4 assignments, two before and two after midterm."},
    {id:crypto.randomUUID(),course:"ECON1220",category:"Homework / exercises",name:"Homework 4",earned:"",max:100,source:"ECON1220 admin: 4 assignments, two before and two after midterm."},
    {id:crypto.randomUUID(),course:"CCST9090",category:"Remaining in-class quizzes",name:"Quiz 2 - 30 Sept",earned:"",max:4,source:"CCST9090 quiz schedule."},
    {id:crypto.randomUUID(),course:"CCST9090",category:"Remaining in-class quizzes",name:"Quiz 3 - 21 Oct",earned:"",max:4,source:"CCST9090 quiz schedule."},
    {id:crypto.randomUUID(),course:"CCST9090",category:"Remaining in-class quizzes",name:"Quiz 4 - 18 Nov",earned:"",max:4,source:"CCST9090 quiz schedule."},
    {id:crypto.randomUUID(),course:"PHIL1012",category:"Tutorial participation",name:"Tutorial 1",earned:"",max:100,source:"PHIL1012 course outline: five tutorials."},
    {id:crypto.randomUUID(),course:"PHIL1012",category:"Tutorial participation",name:"Tutorial 2",earned:"",max:100,source:"PHIL1012 course outline: five tutorials."},
    {id:crypto.randomUUID(),course:"PHIL1012",category:"Tutorial participation",name:"Tutorial 3",earned:"",max:100,source:"PHIL1012 course outline: five tutorials."},
    {id:crypto.randomUUID(),course:"PHIL1012",category:"Tutorial participation",name:"Tutorial 4",earned:"",max:100,source:"PHIL1012 course outline: five tutorials."},
    {id:crypto.randomUUID(),course:"PHIL1012",category:"Tutorial participation",name:"Tutorial 5",earned:"",max:100,source:"PHIL1012 course outline: five tutorials."}
  ],
  classMeetings:[
    ...expandClassPatterns(lecturePatterns),
    ...expandClassPatterns(tutorialPatterns),
    ...expandClassPatterns(courseBlockPatterns)
  ],
  deadlines:[
    {id:crypto.randomUUID(),course:"HUDT1001",title:"W04S1 Homework is due",date:"2026-09-24",type:"Homework"},
    {id:crypto.randomUUID(),course:"HUDT1001",title:"Attendance, 12:00 PM to 1:05 PM",date:"2026-09-24",type:"Attendance"},
    {id:crypto.randomUUID(),course:"ECON1210",title:"[Common] Weekly Assignment 03 Submission inbox closes",date:"2026-09-26",type:"Assignment"},
    {id:crypto.randomUUID(),course:"HUDT1001",title:"Attendance, 1:00 PM to 3:05 PM",date:"2026-09-28",type:"Attendance"},
    {id:crypto.randomUUID(),course:"HUDT1001",title:"In-class quiz 1",date:"2026-09-28",type:"Quiz"},
    {id:crypto.randomUUID(),course:"ECON1220",title:"Homework 1 closes",date:"2026-10-04",type:"Homework"},
    {id:crypto.randomUUID(),course:"HUDT1001",title:"Attendance, 1:00 PM to 3:05 PM",date:"2026-10-05",type:"Attendance"},
    {id:crypto.randomUUID(),course:"HUDT1001",title:"Attendance, 12:00 PM to 1:05 PM",date:"2026-10-08",type:"Attendance"},
    {id:crypto.randomUUID(),course:"AILT1001",title:"Shanghai check-in, 12:00 PM to 5:00 PM",date:"2026-10-11",type:"Travel"},
    {id:crypto.randomUUID(),course:"AILT1001",title:"Artificial Intelligence Literacy I begins",date:"2026-10-12",type:"Reading week"},
    {id:crypto.randomUUID(),course:"AILT1001",title:"Artificial Intelligence Literacy I ends",date:"2026-10-16",type:"Reading week"},
    {id:crypto.randomUUID(),course:"AILT1001",title:"Shanghai check-out / travel day",date:"2026-10-17",type:"Travel"},
    {id:crypto.randomUUID(),course:"ECON1220",title:"Midterm exam, 2:00 PM to 3:30 PM",date:"2026-10-19",type:"Exam"},
    {id:crypto.randomUUID(),course:"CCST9090",title:"Midterm project draft for peer review due",date:"2026-10-20",type:"Project"},
    {id:crypto.randomUUID(),course:"PHIL1012",title:"Midterm exam",date:"2026-10-22",type:"Exam"},
    {id:crypto.randomUUID(),course:"CCST9090",title:"Midterm peer review comments due",date:"2026-10-26",type:"Project"},
    {id:crypto.randomUUID(),course:"HUDT1001",title:"In-class quiz 2",date:"2026-10-29",type:"Quiz"},
    {id:crypto.randomUUID(),course:"PHIL1012",title:"Final exam",date:"2026-11-26",type:"Exam"},
    {id:crypto.randomUUID(),course:"HUDT1001",title:"In-class test",date:"2026-11-30",type:"Test"},
    {id:crypto.randomUUID(),course:"CCST9090",title:"Final group project due",date:"2026-12-30",type:"Project"}
  ]
};
const storageKey = "hku-moodle-planner-verified-v11";
const storageKeyCandidates = [storageKey, "hku-moodle-planner-verified-v10", "hku-moodle-planner-verified-v9", "hku-moodle-planner-verified"];
function readPlannerStorage() {
  for (const key of storageKeyCandidates) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") return { key, state: parsed };
    } catch (error) {
      console.warn("Could not read saved planner data.", error);
    }
  }
  return { key: "", state: null };
}
function normalizePlannerState(saved) {
  const base = structuredClone(verifiedSeed);
  if (!saved || typeof saved !== "object") return base;
  const merged = { ...base, ...saved };
  for (const key of ["courses","futureCourses","components","subcomponents","classMeetings","deadlines"]) {
    if (!Array.isArray(merged[key])) merged[key] = base[key] || [];
  }
  if (!merged.studyMaterials || typeof merged.studyMaterials !== "object") merged.studyMaterials = { files: [], text: "", output: "" };
  if (!merged.checklistDone || typeof merged.checklistDone !== "object") merged.checklistDone = {};
  if (!merged.migrations || typeof merged.migrations !== "object") merged.migrations = {};
  return merged;
}
const loadedPlanner = readPlannerStorage();
let state = normalizePlannerState(loadedPlanner.state);
state.studyMaterials ||= {files:[], text:"", output:""};
state.classMeetings ||= structuredClone(verifiedSeed.classMeetings);
state.checklistDone ||= {};
state.futureCourses ||= [];
state.theme ||= "porcelain";
if (!plannerThemes[state.theme]) state.theme = "porcelain";
state.lastMoodleSyncAt ||= "";
state.migrations ||= {};
let filter = "";
let openCourseCode = "";
let openPlannerCourseId = "";
let classWeekStart = startOfWeek(new Date());
let activeCourseTerm = "sem1";
const $ = selector => document.querySelector(selector);
const els = {today:$("#todayLabel"),title:$("#pageTitle"),indicator:$("#viewIndicator"),lastSync:$("#lastSyncLabel"),studyText:$("#studyText"),studyOutput:$("#studyOutput"),courseRows:$("#courseRows"),courseCreditSummary:$("#courseCreditSummary"),componentBoard:$("#componentBoard"),deadlines:$("#deadlineList"),dashboardChecklist:$("#dashboardChecklist"),dashboardAlerts:$("#dashboardAlerts"),themeSettings:$("#themeSettings"),themePopover:$("#themePopover"),themeToggle:$("#themeToggleButton"),classWeek:$("#classWeekGrid"),weekRange:$("#weekRangeLabel"),calendar:$("#calendarGrid"),month:$("#monthLabel"),gpaRows:$("#gpaRows"),planner:$("#plannerList")};
const labels = {dashboard:"Dashboard",courses:"Courses",grades:"Grade Calculators",calendar:"Calendar",gpa:"Overall GPA",planner:"Course Planner"};
const save = () => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.warn("Could not save planner data.", error);
  }
};
if (loadedPlanner.key !== storageKey) save();
const esc = value => String(value ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
const filtered = (items, keys) => !filter ? items : items.filter(item => keys.some(key => String(item[key]).toLowerCase().includes(filter)));
const targetOptions = Object.keys(gradePoints);
const gradeSelect = (collection,id,key,value,options = targetOptions) => `<select data-collection="${collection}" data-id="${id}" data-key="${key}">${options.map(g=>`<option value="${g}" ${g===value?"selected":""}>${g}</option>`).join("")}</select>`;

document.querySelectorAll(".nav-item").forEach(link => link.addEventListener("click", event => { event.preventDefault(); history.pushState(null,"",`#${link.dataset.view}`); setActive(link.dataset.view,true); }));
document.addEventListener("click", event => {
  const shortcut = event.target.closest("[data-view-jump]");
  if (!shortcut) return;
  event.preventDefault();
  const view = shortcut.dataset.viewJump;
  history.pushState(null,"",`#${view}`);
  setActive(view,true);
});
window.addEventListener("popstate", () => setActive(location.hash.slice(1) || "dashboard", true));
$("#searchInput").addEventListener("input", event => { filter = event.target.value.toLowerCase().trim(); render(); });
$("#moodleLink").addEventListener("click", () => markMoodleSync());
$("#importButton").addEventListener("click", () => openStudyDropBox());
$("#exportButton").addEventListener("click", () => { const blob = new Blob([JSON.stringify(state,null,2)],{type:"application/json"}); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "hku-moodle-planner-backup.json"; a.click(); URL.revokeObjectURL(url); });
$("#studyFiles").addEventListener("change", event => handleStudyFiles(event.target.files));
["dragenter","dragover"].forEach(type => $("#dropZone").addEventListener(type, event => { event.preventDefault(); $("#dropZone").classList.add("is-dragging"); }));
["dragleave","drop"].forEach(type => $("#dropZone").addEventListener(type, event => { event.preventDefault(); $("#dropZone").classList.remove("is-dragging"); }));
$("#dropZone").addEventListener("drop", event => handleStudyFiles(event.dataTransfer.files));
$("#revisionButton").addEventListener("click", () => renderStudyPack("notes"));
$("#mindMapButton").addEventListener("click", () => renderStudyPack("map"));
$("#quizButton").addEventListener("click", () => renderStudyPack("quiz"));
$("#addCourseButton").addEventListener("click", () => openDialog("course"));
document.querySelectorAll("[data-course-term]").forEach(button => button.addEventListener("click", () => {
  activeCourseTerm = button.dataset.courseTerm;
  renderCourses();
}));
$("#addAssessmentButton").addEventListener("click", () => openDialog("component"));
$("#addDeadlineButton").addEventListener("click", () => openDialog("deadline"));
$("#prevWeekButton").addEventListener("click", () => shiftClassWeek(-7));
$("#nextWeekButton").addEventListener("click", () => shiftClassWeek(7));
els.themeToggle?.addEventListener("click", event => {
  event.stopPropagation();
  const willOpen = Boolean(els.themePopover?.hidden);
  if (els.themePopover) els.themePopover.hidden = !willOpen;
  els.themeToggle?.setAttribute("aria-expanded", String(willOpen));
});
document.addEventListener("click", event => {
  if (!els.themePopover || els.themePopover.hidden || event.target.closest(".theme-menu")) return;
  els.themePopover.hidden = true;
  els.themeToggle?.setAttribute("aria-expanded", "false");
});
document.addEventListener("click", event => {
  const themeButton = event.target.closest("[data-theme-key]");
  if (!themeButton) return;
  state.theme = themeButton.dataset.themeKey;
  save();
  applyTheme();
  renderThemeSettings();
  if (els.themePopover) els.themePopover.hidden = true;
  els.themeToggle?.setAttribute("aria-expanded", "false");
});
document.addEventListener("input", event => {
  if (!event.target.dataset.collection) return;
  updateFromField(event.target);
  save();
});
document.addEventListener("change", event => {
  if (event.target.dataset.checklistId) {
    state.checklistDone[event.target.dataset.checklistId] = event.target.checked;
    save();
    renderDashboardChecklist();
    renderDashboardAlerts();
    return;
  }
  if (!event.target.dataset.collection) return;
  updateFromField(event.target);
  save();
});
document.addEventListener("focusout", event => {
  if (!event.target.dataset.collection) return;
  const card = event.target.closest(".component-course, .course-card, .planner-ledger-row");
  if (!card) return;
  requestAnimationFrame(() => {
    if (!card.contains(document.activeElement)) renderAfterEdit();
  });
});
document.addEventListener("click", event => {
  const plannerButton = event.target.closest("[data-planner-update]");
  if (plannerButton) {
    openPlannerCourseId = openPlannerCourseId === plannerButton.dataset.plannerUpdate ? "" : plannerButton.dataset.plannerUpdate;
    renderPlanner();
    return;
  }
  const card = event.target.closest(".component-course");
  if (card && !event.target.closest("button[data-delete], button[data-add-component], button[data-toggle-waived]")) openComponentCourse(card);
  const head = event.target.closest(".component-head");
  if (head && !event.target.closest("button, input, select, textarea")) openComponentCourse(head.closest(".component-course"));
  const toggle = event.target.closest("[data-toggle-waived]");
  if (toggle) {
    const item = state.subcomponents.find(entry => entry.id === toggle.dataset.toggleWaived);
    if (!item) return;
    openCourseCode = item.course || openCourseCode;
    item.waived = !isWaived(item);
    if (item.waived) item.earned = "";
    if (!item.waived && Number(item.earned) < 0) item.earned = "";
    save();
    renderAfterEdit();
    return;
  }
  const button = event.target.closest("[data-delete], [data-add-component]");
  if (!button) return;
  if (button.dataset.addComponent) return openDialog("component", button.dataset.addComponent);
  const [collection,id] = button.dataset.delete.split(":");
  const deleted = state[collection].find(item => item.id === id);
  state[collection] = state[collection].filter(item => item.id !== id);
  if (collection === "courses") state.components = state.components.filter(item => item.course !== id);
  if (collection === "components") {
    if (deleted) state.subcomponents = state.subcomponents.filter(item => item.course !== deleted.course || item.category !== deleted.name);
  }
  save();
  render();
});
document.addEventListener("focusin", event => {
  const card = event.target.closest(".component-course");
  if (card) openComponentCourse(card);
});

function setActive(view, shouldScroll) { const key = labels[view] ? view : "dashboard"; document.body.dataset.view = key; document.querySelectorAll(".nav-item").forEach(link => { const active = link.dataset.view === key; link.classList.toggle("active", active); link.toggleAttribute("aria-current", active); }); els.title.textContent = labels[key]; els.indicator.textContent = `Viewing ${labels[key]}`; if (shouldScroll) window.scrollTo({top:0,behavior:"smooth"}); }
function openStudyDropBox() { $("#studyDropBox").classList.toggle("visible"); renderStudyDropBox(); }
function openComponentCourse(card) {
  if (!card) return;
  openCourseCode = card.querySelector("h4")?.textContent || openCourseCode;
  document.querySelectorAll(".component-course.is-open").forEach(item => {
    if (item !== card && !item.contains(document.activeElement)) item.classList.remove("is-open");
  });
  card.classList.add("is-open");
}
function updateFromField(field) {
  const {collection,id,key} = field.dataset;
  const item = state[collection].find(entry => entry.id === id);
  if (!item) return;
  openCourseCode = item.course || item.code || field.closest(".component-course")?.querySelector("h4")?.textContent || openCourseCode;
  item[key] = field.type === "number" ? (field.value === "" ? "" : Number(field.value)) : field.value;
  if (key === "earned" && Number(item.earned) < 0) {
    item.waived = true;
    item.earned = "";
  }
  if (key === "target") item.targetPercent = targetPercentForGrade(item.target);
}
function renderAfterEdit() {
  const top = window.scrollY;
  render();
  requestAnimationFrame(() => window.scrollTo({top,behavior:"auto"}));
}
function markMoodleSync() {
  state.lastMoodleSyncAt = new Date().toISOString();
  save();
  renderSyncStatus();
}
function formatSyncTime(value) {
  if (!value) return "Not yet marked";
  return new Intl.DateTimeFormat("en-HK",{weekday:"short",day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).format(new Date(value));
}
function renderSyncStatus() {
  if (els.lastSync) els.lastSync.textContent = formatSyncTime(state.lastMoodleSyncAt);
}
function render() { applyTheme(); els.today.textContent = new Intl.DateTimeFormat("en-HK",{weekday:"short",day:"numeric",month:"short",year:"numeric"}).format(new Date()); renderSyncStatus(); renderCourses(); renderComponents(); renderDeadlines(); renderDashboardChecklist(); renderDashboardAlerts(); renderThemeSettings(); renderClassWeek(); renderCalendar(); renderGpa(); renderPlanner(); renderMetrics(); renderStudyDropBox(); }
function applyTheme() {
  const theme = plannerThemes[state.theme] || plannerThemes.porcelain;
  const colors = theme.colors;
  const root = document.documentElement?.style;
  if (!root) return;
  document.body.dataset.theme = plannerThemes[state.theme] ? state.theme : "porcelain";
  root.setProperty("--canvas", colors.canvas);
  root.setProperty("--panel", colors.panel);
  root.setProperty("--panel-strong", colors.panelStrong);
  root.setProperty("--theme-tint", colors.tint);
  Object.entries(colors).forEach(([key, value]) => root.setProperty(`--color-${key}`, value));
  if (colors.primary) {
    root.setProperty("--red", colors.primary);
    root.setProperty("--red-dark", colors.primary);
  }
}
function renderThemeSettings() {
  if (!els.themeSettings) return;
  els.themeSettings.innerHTML = Object.entries(plannerThemes).map(([key, theme]) => {
    const selected = (plannerThemes[state.theme] ? state.theme : "porcelain") === key;
    const swatches = ["primary","assignment","homework","reading"].map(name => `<i style="background:${esc(theme.colors[name])}"></i>`).join("");
    return `<button class="theme-option ${selected ? "active" : ""}" type="button" data-theme-key="${key}" aria-pressed="${selected}">
      <span><strong>${esc(theme.label)}</strong><small>${esc(theme.vibe)}</small></span>
      <em>${swatches}</em>
    </button>`;
  }).join("");
}
function renderStudyDropBox() {
  if (!els.studyText || !els.studyOutput) return;
  els.studyText.value = state.studyMaterials?.text || "";
  els.studyOutput.textContent = state.studyMaterials?.output || "Your generated study pack will appear here.";
}
async function handleStudyFiles(files) {
  const incoming = Array.from(files || []);
  if (!incoming.length) return;
  const entries = [];
  for (const file of incoming) {
    const readable = /text|json|csv|markdown/.test(file.type) || /\.(txt|md|csv|json)$/i.test(file.name);
    let text = "";
    if (readable) text = (await file.text()).slice(0, 16000);
    entries.push({name:file.name,size:file.size,readable,text});
  }
  const readableText = entries.filter(file => file.text).map(file => `# ${file.name}\n${file.text}`).join("\n\n");
  const unreadable = entries.filter(file => !file.readable).map(file => file.name);
  state.studyMaterials.files = [...(state.studyMaterials.files || []), ...entries.map(({name,size,readable}) => ({name,size,readable}))];
  state.studyMaterials.text = [state.studyMaterials.text, readableText].filter(Boolean).join("\n\n").trim();
  state.studyMaterials.output = unreadable.length
    ? `Added ${entries.length} file(s). I can read plain text files directly. For ${unreadable.join(", ")}, paste the key text into the box and then create notes, a mind map, or a practice quiz.`
    : `Added ${entries.length} readable file(s). Choose Revision Notes, Mind Map, or Practice Quiz.`;
  save();
  renderStudyDropBox();
}
function renderStudyPack(mode) {
  state.studyMaterials.text = els.studyText.value.trim();
  const pack = buildStudyPack(state.studyMaterials.text);
  const output = mode === "map" ? pack.mindMap.join("\n") : mode === "quiz" ? pack.quiz.join("\n\n") : pack.revisionNotes.join("\n");
  state.studyMaterials.output = output || "Paste notes or drop a readable text file first.";
  save();
  renderStudyDropBox();
}
function buildStudyPack(text) {
  const chunks = String(text || "")
    .replace(/\s+/g, " ")
    .split(/(?<=[.!?])\s+|[\n\r]+/)
    .map(line => line.trim())
    .filter(line => line.length > 18)
    .slice(0, 12);
  if (!chunks.length) return {revisionNotes:[], mindMap:[], quiz:[]};
  const keyLines = chunks.slice(0, 8);
  return {
    revisionNotes:["Revision notes", ...keyLines.map(line => `- ${line}`)],
    mindMap:["Mind map", ...keyLines.slice(0, 6).map((line, index) => `- Branch ${index + 1}: ${line.slice(0, 96)}${line.length > 96 ? "..." : ""}`)],
    quiz:["Practice quiz", ...keyLines.slice(0, 6).map((line, index) => `Q${index + 1}. Explain this in your own words: ${line.slice(0, 110)}${line.length > 110 ? "..." : ""}\nA${index + 1}. Check that your answer names the concept, gives the mechanism, and uses one course example.`)]
  };
}
function renderCourses() { renderCourseTerms(); }
function renderCourseCreditSummary() {
  if (!els.courseCreditSummary) return;
  const currentCredits = state.courses.reduce((sum, course) => sum + (Number(course.credits) || 0), 0);
  const planned = state.futureCourses.filter(course => course.term === activeCourseTerm);
  const plannedCredits = planned.reduce((sum, course) => sum + (Number(course.credits) || 0), 0);
  const value = activeCourseTerm === "sem1" ? currentCredits : plannedCredits || 0;
  const note = activeCourseTerm === "sem1" ? "Current Sem 1 load" : "Planned only";
  els.courseCreditSummary.innerHTML = `<details class="credit-pocket-calculator" aria-label="Credits ${esc(value)}"><summary class="credit-pocket-summary"><span>Credits</span><strong>${esc(value)}</strong><b aria-hidden="true">⌄</b></summary><div class="credit-pocket-details"><small>${esc(note)}</small><div class="credit-pocket-keys" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div></div></details>`;
}
function renderCourseTerms() {
  const labels = {sem1:"Sem 1", sem2:"Sem 2", summer:"Summer"};
  renderCourseCreditSummary();
  document.querySelectorAll("[data-course-term]").forEach(button => {
    const active = button.dataset.courseTerm === activeCourseTerm;
    button.classList.toggle("active", active);
    button.toggleAttribute("aria-selected", active);
  });
  const addButton = $("#addCourseButton");
  if (addButton) {
    addButton.textContent = activeCourseTerm === "sem1" ? "Plan Sem 2 Course" : `Add ${labels[activeCourseTerm]} Course`;
  }
  if (activeCourseTerm === "sem1") {
    const courses = filtered(state.courses,["code","title","target","plan"]);
    els.courseRows.innerHTML = courses.map(c => {
      const calc = courseProgress(c);
      const status = c.passFail ? "Pass/fail" : `${Number(c.credits)||0} credits · Target ${esc(c.target)} / ${Number(c.targetPercent)||0}%`;
      const progress = c.passFail ? "Not counted in GPA" : `${calc.projectedPercent == null ? "-" : `${calc.projectedPercent.toFixed(1)}%`} projected`;
      return `<article class="term-course-card current-term"><div><h4>${esc(c.code)}</h4><p>${esc(c.title)}</p></div><div class="term-course-meta"><span>${status}</span><strong class="projected-grade">${progress}</strong></div></article>`;
    }).join("");
    return;
  }
  const planned = filtered(state.futureCourses.filter(course => course.term === activeCourseTerm),["code","title","status","plan"]);
  els.courseRows.innerHTML = planned.length ? planned.map(c => `<div class="course-card future-course-card"><label>Code<input data-collection="futureCourses" data-id="${c.id}" data-key="code" value="${esc(c.code)}"></label><label class="title-field">Course Title<input data-collection="futureCourses" data-id="${c.id}" data-key="title" value="${esc(c.title)}"></label><label>Credits<input type="number" data-collection="futureCourses" data-id="${c.id}" data-key="credits" value="${c.credits}"></label><label>Status<input data-collection="futureCourses" data-id="${c.id}" data-key="status" value="${esc(c.status)}"></label><label class="title-field">Plan / note<input data-collection="futureCourses" data-id="${c.id}" data-key="plan" placeholder="e.g. check prerequisites" value="${esc(c.plan)}"></label><button class="button secondary delete-card" data-delete="futureCourses:${c.id}">Delete</button></div>`).join("") : `<div class="empty-term"><strong>No ${labels[activeCourseTerm].toLowerCase()} courses planned yet.</strong><span>Add courses here when enrollment opens. These will not affect current GPA.</span></div>`;
}
function renderComponents() {
  const visibleCourses = filtered(state.courses,["code","title","target","plan"]);
  els.componentBoard.innerHTML = visibleCourses.map(course => {
    const calc = courseProgress(course);
    const components = state.components.filter(item => item.course === course.code);
    const rows = components.map(component => {
      const pct = componentDisplayPercent(component);
      const contribution = pct == null ? "-" : ((Number(component.weight)||0) * pct / 100).toFixed(1);
      const needed = componentNeeded(course, component);
      const subRows = subcomponentsFor(component).map(item => renderSubcomponentRow(course, component, item)).join("");
      return `<tr class="category-row"><td><input data-collection="components" data-id="${component.id}" data-key="name" value="${esc(component.name)}"></td><td><input type="number" data-collection="components" data-id="${component.id}" data-key="weight" value="${component.weight}"></td><td><input type="number" data-collection="components" data-id="${component.id}" data-key="earned" value="${component.earned}" ${subRows ? "disabled" : ""}></td><td><input type="number" data-collection="components" data-id="${component.id}" data-key="max" value="${component.max}" ${subRows ? "disabled" : ""}></td><td>${pct == null ? "-" : `${pct.toFixed(1)}%`}</td><td>${contribution}</td><td>${needed}</td><td><input data-collection="components" data-id="${component.id}" data-key="source" value="${esc(component.source)}"></td><td><button class="row-button" data-delete="components:${component.id}">Delete</button></td></tr>${subRows}`;
    }).join("");
    return `<section class="component-course ${openCourseCode === course.code ? "is-open" : ""}" data-course-code="${esc(course.code)}" tabindex="0"><div class="component-head"><div><h4>${esc(course.code)}</h4><p>${esc(course.title)}</p></div><div class="fold-summary"><span class="projected-grade">${calc.projectedPercent == null ? "Pass/fail" : `${calc.projectedPercent.toFixed(1)}% projected`}</span><span class="${calc.neededClass}">${calc.neededLabel}</span></div><button class="button outline" data-add-component="${esc(course.code)}">Add</button></div><div class="component-detail"><div class="progress-strip"><span>Done: <strong>${calc.completedWeight.toFixed(1)}%</strong></span><span>Projected: <strong class="projected-grade">${calc.projectedPercent == null ? "-" : `${calc.projectedPercent.toFixed(1)}%`}</strong></span><span>Target: <strong>${course.passFail ? "Pass" : `${course.targetPercent}% / ${course.target}`}</strong></span><span>Need on blank weight: <strong class="${calc.neededClass}">${calc.neededLabel}</strong></span></div><div class="table-wrap"><table><thead><tr><th>Component / sub-item</th><th>Weight %</th><th>Score</th><th>Out of</th><th>%</th><th>Course impact</th><th>Needed for 4.0+</th><th>Source / note</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></div></section>`;
  }).join("");
}
function renderDeadlines() { els.deadlines.innerHTML = filtered([...state.deadlines].sort((a,b)=>new Date(a.date)-new Date(b.date)),["course","title","type"]).map(d => { const date = new Date(`${d.date}T12:00:00`); const due = dueDateFor(d); const days = dayDistance(date); const typeClass = deadlineTypeClass(d.type); const countdown = countdownLabel(due); return `<div class="deadline-item ${typeClass}"><div class="deadline-date">${date.getDate()}<span>${date.toLocaleString("en-HK",{month:"short"})}</span></div><div><p class="deadline-title">${esc(d.title)}</p><p class="deadline-meta"><span class="type-pill ${typeClass}">${esc(d.type)}</span>${esc(d.course)} · ${formatDeadlineLabel(days)}</p></div><div class="days-left ${typeClass}">${countdown}</div></div>`; }).join(""); }
function renderDashboardChecklist() {
  if (!els.dashboardChecklist) return;
  const today = startOfToday();
  const horizon = addDays(today, dashboardHorizonDays);
  const items = state.deadlines
    .filter(item => {
      const date = new Date(`${item.date}T23:59:59`);
      return date >= today && date <= horizon;
    })
    .sort((a,b) => new Date(a.date) - new Date(b.date));
  els.dashboardChecklist.innerHTML = items.map(item => {
    const date = new Date(`${item.date}T12:00:00`);
    const days = Math.ceil((date - today) / 86400000);
    const checked = Boolean(state.checklistDone[item.id]);
    const typeClass = deadlineTypeClass(item.type);
    return `<label class="task-item ${checked ? "is-done" : ""} ${typeClass}"><span class="task-date">${date.getDate()}<small>${date.toLocaleString("en-HK",{month:"short"})}</small></span><span class="task-status-dot" aria-hidden="true"></span><span class="task-main"><strong>${esc(item.title)}</strong><small><span class="type-pill ${typeClass}">${esc(item.type)}</span>${esc(item.course)} · ${countdownLabel(dueDateFor(item))}</small></span><input type="checkbox" data-checklist-id="${item.id}" ${checked ? "checked" : ""}><span class="task-check" aria-hidden="true"></span></label>`;
  }).join("") || `<div class="empty-checklist">No upcoming checklist items in the next 7 days.</div>`;
}
function renderDashboardAlerts() {
  if (!els.dashboardAlerts) return;
  const today = startOfToday();
  const horizon = addDays(today, dashboardHorizonDays);
  const assessments = state.deadlines
    .filter(item => ["Quiz","Assignment","Homework","Exam","Test","Project"].includes(item.type))
    .filter(item => !state.checklistDone[item.id])
    .filter(item => {
      const date = new Date(`${item.date}T23:59:59`);
      return date >= today && date <= horizon;
    })
    .sort((a,b) => new Date(a.date) - new Date(b.date))
    .slice(0, 3);
  const targetAlerts = state.courses
    .filter(course => !course.passFail)
    .map(course => ({course, calc:courseProgress(course)}))
    .filter(({course, calc}) => calc.projectedPercent != null && calc.projectedPercent < Number(course.targetPercent || 0))
    .map(({course, calc}) => {
      const target = Number(course.targetPercent || 0);
      const gap = Math.max(0, target - calc.projectedPercent).toFixed(1);
      const advice = calc.neededLabel === "No blank weight"
        ? `Raise entered or future component scores by about ${gap} points to reach ${target}%.`
        : `${esc(calc.neededLabel)} needed on remaining blank weight.`;
      return `<article class="dashboard-alert warn"><span class="alert-status-dot" aria-hidden="true"></span><div><strong>${esc(course.code)} is below target</strong><span class="alert-signal-meta">${calc.projectedPercent.toFixed(1)}% projected. ${advice}</span></div></article>`;
    });
  const dateAlerts = assessments.map(item => {
    const date = new Date(`${item.date}T12:00:00`);
    const days = Math.ceil((date - today) / 86400000);
    const typeClass = deadlineTypeClass(item.type);
    return `<article class="dashboard-alert ${typeClass}"><span class="alert-status-dot" aria-hidden="true"></span><div><strong>${esc(item.title)}</strong><span class="alert-signal-meta"><span class="type-pill ${typeClass}">${esc(item.type)}</span>${esc(item.course)} · ${date.toLocaleDateString("en-HK",{weekday:"short",day:"numeric",month:"short"})} · ${countdownLabel(dueDateFor(item))}</span></div></article>`;
  });
  els.dashboardAlerts.innerHTML = [...targetAlerts, ...dateAlerts].join("") || `<article class="dashboard-alert good"><span class="alert-status-dot" aria-hidden="true"></span><div><strong>All clear</strong><span class="alert-signal-meta">No target warnings or assessment deadlines found.</span></div></article>`;
}
function dueDateFor(item) {
  const due = new Date(`${item.date}T23:59:59`);
  const timeMatch = String(item.title || "").match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (timeMatch) {
    let hour = Number(timeMatch[1]);
    const minute = Number(timeMatch[2]);
    const period = timeMatch[3]?.toUpperCase();
    if (period === "PM" && hour < 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;
    due.setHours(hour, minute, 0, 0);
  }
  return due;
}
function countdownLabel(due) {
  const diff = due.getTime() - Date.now();
  if (diff <= 0) return "Past";
  const totalMinutes = Math.ceil(diff / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  if (days <= 0 && hours <= 0) return `${minutes}m left`;
  if (days <= 0) return `${hours}h${minutes ? ` ${minutes}m` : ""} left`;
  if (days < 2) return `${days}d ${hours}h${minutes && hours === 0 ? ` ${minutes}m` : ""} left`;
  return `${days}d${hours ? ` ${hours}h` : ""} left`;
}
function deadlineTypeClass(type) {
  const key = String(type || "").toLowerCase();
  if (key.includes("quiz") || key.includes("exam") || key.includes("test")) return "type-quiz";
  if (key.includes("homework")) return "type-homework";
  if (key.includes("assignment")) return "type-assignment";
  if (key.includes("project")) return "type-project";
  if (key.includes("attendance")) return "type-attendance";
  if (key.includes("reading") || key.includes("travel")) return "type-reading";
  return "type-general";
}
function formatDeadlineLabel(days) {
  if (days < 0) return "past";
  if (days === 0) return "today";
  if (days === 1) return "tomorrow";
  return `${days} days`;
}
function dayDistance(date) {
  const target = new Date(date);
  target.setHours(0,0,0,0);
  return Math.round((target - startOfToday()) / 86400000);
}
function renderClassWeek() {
  const days = Array.from({length:7}, (_, index) => addDays(classWeekStart, index));
  const weekEnd = days[6];
  els.weekRange.textContent = `${formatShortDate(classWeekStart)} - ${formatShortDate(weekEnd)}`;
  const visibleMeetings = filtered([...state.classMeetings].sort((a,b)=>classTimeValue(a)-classTimeValue(b)),["course","title","kind","location","date","source"]);
  els.classWeek.innerHTML = days.map(day => {
    const key = isoDate(day);
    const meetings = visibleMeetings.filter(item => item.date === key);
    return `<section class="class-day ${isSameDate(day, new Date()) ? "today" : ""}"><div class="class-day-head"><strong>${day.toLocaleDateString("en-HK",{weekday:"short"})}</strong><span>${day.getDate()} ${day.toLocaleDateString("en-HK",{month:"short"})}</span></div><div class="class-day-body">${meetings.map(renderClassCard).join("") || `<div class="empty-day">No class</div>`}</div></section>`;
  }).join("");
}
function renderClassCard(item) { const kindLabel = item.kind === "course" ? "course block" : item.kind; return `<article class="class-card ${item.kind}"><div><strong>${esc(item.course)}</strong><span>${esc(kindLabel)}</span></div><p>${esc(item.title)}</p><small>${esc(item.start)}-${esc(item.end)} · ${esc(item.location)}</small></article>`; }
function calendarBadgesForDate(key) {
  const badges = [];
  const classes = state.classMeetings || [];
  const deadlines = state.deadlines || [];
  const studyBlocks = studyBlocksForCalendar();
  const academic = academicCalendarEvents.filter(item => item.date === key);
  if (classes.some(item => item.date === key && item.kind === "lecture")) badges.push({label:"LEC", type:"lecture"});
  if (classes.some(item => item.date === key && item.kind === "tutorial")) badges.push({label:"TUT", type:"tutorial"});
  if (classes.some(item => item.date === key && item.kind === "course")) badges.push({label:"COURSE", type:"course"});
  if (studyBlocks.some(item => item.date === key)) badges.push({label:"STUDY", type:"study"});
  if (deadlines.some(item => item.date === key && deadlineTypeClass(item.type) === "type-quiz")) badges.push({label:"QUIZ", type:"quiz"});
  if (deadlines.some(item => item.date === key && deadlineTypeClass(item.type) === "type-assignment")) badges.push({label:"ASSIGN", type:"assignment"});
  if (deadlines.some(item => item.date === key && deadlineTypeClass(item.type) === "type-homework")) badges.push({label:"HW", type:"homework"});
  if (deadlines.some(item => item.date === key && ["type-project","type-reading"].includes(deadlineTypeClass(item.type)))) badges.push({label:"DUE", type:"deadline"});
  academic.forEach(item => {
    const label = item.type === "reading" ? "READING" : item.type === "assessment" ? "ASSESS" : item.type === "revision" ? "REVISION" : item.label;
    if (!badges.some(badge => badge.label === label)) badges.push({label, type:item.type});
  });
  return badges.slice(0, 4);
}
function calendarDayClass(key) {
  const academic = academicCalendarEvents.filter(item => item.date === key);
  if (academic.some(item => item.type === "holiday")) return "has-holiday";
  if (academic.some(item => item.type === "reading")) return "has-reading";
  if (academic.some(item => item.type === "assessment")) return "has-assessment";
  if (academic.some(item => item.type === "revision")) return "has-revision";
  return "";
}
function renderCalendar() {
  const now = new Date(), y = now.getFullYear(), m = now.getMonth(), first = new Date(y,m,1), offset = (first.getDay()+6)%7, start = new Date(y,m,1-offset);
  els.month.textContent = now.toLocaleString("en-HK",{month:"long",year:"numeric"});
  const cells = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=>`<div class="calendar-cell calendar-head-cell"><strong>${d}</strong></div>`);
  for (let i=0;i<35;i++){
    const date = new Date(start);
    date.setDate(start.getDate()+i);
    const key = isoDate(date);
    const badges = calendarBadgesForDate(key);
    const dayClass = calendarDayClass(key);
    const stack = badges.map(badge => `<span class="calendar-badge ${esc(badge.type)}">${esc(badge.label)}</span>`).join("");
    cells.push(`<div class="calendar-cell ${dayClass} ${date.getMonth()!==m?"muted":""}"><span class="calendar-day-number">${date.getDate()}</span>${stack ? `<span class="calendar-stack">${stack}</span>` : ""}</div>`);
  }
  els.calendar.innerHTML = cells.join("");
}
function renderGpa() {
  let totalCredits = 0, totalPoints = 0;
  els.gpaRows.innerHTML = state.courses.filter(course => !course.passFail).map(course => {
    const calc = courseProgress(course);
    const grade = calc.projectedPercent == null ? "-" : gradeFromPercent(calc.projectedPercent);
    const points = gradePoints[grade];
    if (points != null) { totalCredits += Number(course.credits)||0; totalPoints += (Number(course.credits)||0) * points; }
    return `<tr><td>${esc(course.code)}</td><td>${Number(course.credits)||0}</td><td>${calc.projectedPercent == null ? "-" : `${calc.projectedPercent.toFixed(1)}%`}</td><td>${grade}</td><td>${points ?? "-"}</td></tr>`;
  }).join("");
  const gpa = totalCredits ? (totalPoints/totalCredits).toFixed(2) : "0.00";
  $("#gpaValue").textContent = $("#gpaFooter").textContent = gpa;
}
function planFocus(course, calc) {
  if (course.passFail) return course.plan || "Pass/fail course - track attendance and completion.";
  if (calc.projectedPercent != null && calc.projectedPercent < Number(course.targetPercent || 0)) return `Priority: lift projected score to ${course.targetPercent}%+ for ${course.target}.`;
  return course.plan || "Add weekly workload, revision blocks, or a next action.";
}
function renderPlanner() {
  const visible = filtered(state.courses,["code","title","target","plan","nextAction","studyDate","studyStart","studyEnd","revisionNote"]);
  els.planner.innerHTML = `<div class="planner-ledger">${visible.map(course => {
    const calc = courseProgress(course);
    const open = openPlannerCourseId === course.id;
    const nextAction = course.nextAction || suggestedNextAction(course, calc);
    const studyMeta = plannerStudyLabel(course);
    const revision = course.revisionNote || suggestedRevisionNote(course, calc);
    return `<section class="planner-ledger-row ${open ? "is-open" : ""}">
      <div class="planner-code"><strong>${esc(course.code)}</strong><span>${Number(course.credits)||0} credits</span></div>
      <div class="planner-ledger-main">
        <strong>${esc(nextAction)}</strong>
        <span>${esc(studyMeta)} · ${esc(revision)}</span>
      </div>
      <div class="planner-ledger-status"><span class="${calc.neededClass}">${course.passFail ? "Pass/fail" : `${calc.projectedPercent?.toFixed(1) ?? "-"}%`}</span><button class="button outline" type="button" data-planner-update="${course.id}">${open ? "Close" : "Update"}</button></div>
      ${open ? plannerEditFields(course) : ""}
    </section>`;
  }).join("")}</div>`;
}
function plannerEditFields(course) {
  return `<div class="planner-edit-panel">
    <label>Next action<input data-collection="courses" data-id="${course.id}" data-key="nextAction" value="${esc(course.nextAction || suggestedNextAction(course, courseProgress(course)))}"></label>
    <label>Study date<input type="date" data-collection="courses" data-id="${course.id}" data-key="studyDate" value="${esc(course.studyDate || "")}"></label>
    <label>Start<input type="time" data-collection="courses" data-id="${course.id}" data-key="studyStart" value="${esc(course.studyStart || "")}"></label>
    <label>End<input type="time" data-collection="courses" data-id="${course.id}" data-key="studyEnd" value="${esc(course.studyEnd || "")}"></label>
    <label class="wide-field">Mistake / revision note<textarea data-collection="courses" data-id="${course.id}" data-key="revisionNote">${esc(course.revisionNote || suggestedRevisionNote(course, courseProgress(course)))}</textarea></label>
  </div>`;
}
function suggestedNextAction(course, calc) {
  if (course.passFail) return "Track attendance and completion";
  if (calc.projectedPercent != null && calc.projectedPercent < Number(course.targetPercent || 0)) return `Raise ${course.code} toward ${course.target}`;
  return course.plan || "Set one concrete next action";
}
function suggestedRevisionNote(course, calc) {
  if (course.passFail) return "Keep pass/fail requirements complete.";
  if (calc.projectedPercent != null && calc.projectedPercent < Number(course.targetPercent || 0)) return "Add the mistake or concept that cost marks.";
  return "Add a quiz/test mistake after your next score.";
}
function plannerStudyLabel(course) {
  if (!course.studyDate) return "No study block set";
  const date = new Date(`${course.studyDate}T12:00:00`);
  const day = date.toLocaleDateString("en-HK",{weekday:"short",day:"numeric",month:"short"});
  const start = course.studyStart || "time unset";
  const end = course.studyEnd ? `-${course.studyEnd}` : "";
  return `${day} · ${start}${end}`;
}
function studyBlocksForCalendar() {
  return state.courses
    .filter(course => course.studyDate && course.nextAction)
    .map(course => ({
      date:course.studyDate,
      course:course.code,
      title:course.nextAction,
      start:course.studyStart || "",
      end:course.studyEnd || "",
      type:"study"
    }));
}
function renderMetrics() { const upcoming = state.deadlines.filter(d => new Date(`${d.date}T23:59:59`) >= startOfToday()).length; const gradable = [...state.components, ...(state.subcomponents || [])]; const completed = gradable.filter(a => scorePercent(a) != null).length; $("#courseCount").textContent = state.courses.length; $("#deadlineCount").textContent = upcoming; $("#completionValue").textContent = `${gradable.length ? Math.round(completed/gradable.length*100) : 0}%`; }
function isWaived(item) { return Boolean(item.waived) || Number(item.earned) < 0; }
function scorePercent(component) { if (isWaived(component)) return null; const earned = Number(component.earned), max = Number(component.max); if (component.earned === "" || component.max === "" || !max) return null; return earned / max * 100; }
function subcomponentsFor(component) { return (state.subcomponents || []).filter(item => item.course === component.course && item.category === component.name); }
function activeSubcomponentsFor(component) { return subcomponentsFor(component).filter(item => !isWaived(item)); }
function percentForMode(item, mode = "projected") { const pct = scorePercent(item); return pct == null && mode === "projected" ? 85 : pct; }
function rankedSubcomponents(component, mode = "projected") {
  const activeSubs = activeSubcomponentsFor(component);
  const items = activeSubs.map(item => ({item, pct:percentForMode(item, mode)})).filter(entry => entry.pct != null);
  const divisor = Math.min(Number(component.countBest) || items.length || activeSubs.length || 1, activeSubs.length || 1);
  const ranked = items.sort((a,b) => b.pct - a.pct).slice(0, divisor);
  return {ranked, divisor};
}
function categoryPercent(component, mode = "projected") {
  const subs = activeSubcomponentsFor(component);
  if (!subs.length) return mode === "projected" ? (scorePercent(component) ?? 85) : scorePercent(component);
  const {ranked, divisor} = rankedSubcomponents(component, mode);
  if (!ranked.length) return mode === "projected" ? 85 : null;
  return ranked.reduce((sum, entry) => sum + entry.pct, 0) / divisor;
}
function componentDisplayPercent(component) { return subcomponentsFor(component).length ? categoryPercent(component, "projected") : scorePercent(component); }
function completedShare(component) {
  const subs = activeSubcomponentsFor(component);
  if (!subs.length) return scorePercent(component) == null ? 0 : 1;
  const filled = subs.filter(item => scorePercent(item) != null).length;
  const divisor = Math.min(Number(component.countBest) || subs.length || 1, subs.length || 1);
  return Math.min(filled, divisor) / divisor;
}
function subcomponentImpact(component, item) {
  const subs = activeSubcomponentsFor(component);
  if (isWaived(item)) return {included:false, impact:null, effectiveWeight:0};
  const pct = scorePercent(item);
  if (pct == null || !subs.length) return {included:false, impact:null, effectiveWeight:0};
  const {ranked, divisor} = rankedSubcomponents(component, "projected");
  const included = ranked.some(entry => entry.item.id === item.id);
  const effectiveWeight = included ? (Number(component.weight)||0) / divisor : 0;
  return {included, effectiveWeight, impact:included ? effectiveWeight * pct / 100 : 0};
}
function renderSubcomponentRow(course, component, item) {
  const pct = scorePercent(item);
  const impact = subcomponentImpact(component, item);
  const needed = subcomponentNeeded(course, component, item);
  const waived = isWaived(item);
  return `<tr class="sub-row ${waived ? "waived-row" : ""}"><td><input data-collection="subcomponents" data-id="${item.id}" data-key="name" value="${esc(item.name)}"></td><td><span class="sub-weight">${waived ? "Waived" : impact.effectiveWeight ? `${impact.effectiveWeight.toFixed(2)} now` : "0 now"}</span></td><td><input type="number" data-collection="subcomponents" data-id="${item.id}" data-key="earned" value="${waived ? "" : item.earned}" ${waived ? "disabled" : ""}></td><td><input type="number" data-collection="subcomponents" data-id="${item.id}" data-key="max" value="${item.max}" ${waived ? "disabled" : ""}></td><td>${waived ? "Waived" : pct == null ? "-" : `${pct.toFixed(1)}%`}</td><td>${impact.impact == null ? "-" : impact.impact.toFixed(2)}</td><td>${needed}</td><td><input data-collection="subcomponents" data-id="${item.id}" data-key="source" value="${esc(item.source)}"></td><td><button class="row-button" data-toggle-waived="${item.id}">${waived ? "Unwaive" : "Waive"}</button><button class="row-button" data-delete="subcomponents:${item.id}">Delete</button></td></tr>`;
}
function courseProgress(course) {
  const components = state.components.filter(item => item.course === course.code);
  let achieved = 0, completedWeight = 0, blankWeight = 0, totalWeight = 0;
  components.forEach(component => { const weight = Number(component.weight)||0; totalWeight += weight; const pct = categoryPercent(component, "projected"); const share = completedShare(component); completedWeight += weight * share; if (pct == null) blankWeight += weight; else achieved += weight * pct / 100; });
  const projectedPercent = components.length ? achieved + blankWeight * 0.85 : null;
  if (course.passFail) return {completedWeight, projectedPercent:null, neededLabel:"Pass/fail", neededClass:"neutral"};
  if (!totalWeight) return {completedWeight, projectedPercent:Number(course.targetPercent||0), neededLabel:"Enter weights", neededClass:"neutral"};
  const needed = blankWeight ? (Number(course.targetPercent||0) - achieved) / blankWeight * 100 : null;
  const neededLabel = needed == null ? (achieved >= Number(course.targetPercent||0) ? "Target met" : "No blank weight") : `${Math.max(0, needed).toFixed(1)}% avg`;
  const neededClass = needed == null ? "neutral" : needed > 100 ? "danger" : needed > 85 ? "warn" : "good";
  return {completedWeight, projectedPercent, neededLabel, neededClass};
}
function componentNeeded(course, component) {
  if (course.passFail) return "Pass/fail";
  if (subcomponentsFor(component).length) return `${categoryNeededAverage(course, component).toFixed(1)}% avg`;
  if (scorePercent(component) != null) return "Done";
  const weight = Number(component.weight)||0;
  if (!weight) return "Set weight";
  const components = state.components.filter(item => item.course === course.code);
  let known = 0, assumedOtherBlank = 0;
  components.forEach(item => {
    if (item.id === component.id) return;
    const itemWeight = Number(item.weight)||0;
    const pct = scorePercent(item);
    if (pct == null) assumedOtherBlank += itemWeight * Number(course.targetPercent||0) / 100;
    else known += itemWeight * pct / 100;
  });
  const needed = (Number(course.targetPercent||0) - known - assumedOtherBlank) / weight * 100;
  return `${Math.max(0, needed).toFixed(1)}%`;
}
function categoryNeededAverage(course, component) {
  const components = state.components.filter(item => item.course === course.code);
  const otherContribution = components.reduce((sum, item) => {
    if (item.id === component.id) return sum;
    return sum + (Number(item.weight)||0) * (categoryPercent(item, "projected") ?? Number(course.targetPercent||0)) / 100;
  }, 0);
  return Math.max(0, (Number(course.targetPercent||0) - otherContribution) / (Number(component.weight)||1) * 100);
}
function subcomponentNeeded(course, component, item) {
  if (isWaived(item)) return "Waived";
  if (scorePercent(item) != null) return subcomponentImpact(component, item).included ? "Counting" : "Dropped now";
  if (Number(component.countBest)) return `Aim ${categoryNeededAverage(course, component).toFixed(1)}%+`;
  return `Aim ${categoryNeededAverage(course, component).toFixed(1)}%`;
}
function gradeFromPercent(percent) { return gradeBands.find(band => percent >= band.min)?.grade || "F"; }
function targetPercentForGrade(grade) { return gradeBands.find(band => band.grade === grade)?.min ?? 0; }
function startOfToday(){ const d = new Date(); d.setHours(0,0,0,0); return d; }
function classTimeValue(item) { return new Date(`${item.date}T${item.start}:00`).getTime(); }
function startOfWeek(date) { const d = new Date(date); d.setHours(0,0,0,0); d.setDate(d.getDate()-d.getDay()); return d; }
function addDays(date, amount) { const d = new Date(date); d.setDate(d.getDate()+amount); return d; }
function shiftClassWeek(days) { classWeekStart = addDays(classWeekStart, days); renderClassWeek(); }
function isoDate(date) { const y = date.getFullYear(); const m = String(date.getMonth()+1).padStart(2,"0"); const d = String(date.getDate()).padStart(2,"0"); return `${y}-${m}-${d}`; }
function isSameDate(a,b) { return isoDate(a) === isoDate(b); }
function formatShortDate(date) { return date.toLocaleDateString("en-HK",{day:"numeric",month:"short"}); }
function openDialog(type, presetCourse = "") {
  const configs = {
    course:{title:activeCourseTerm === "sem1" ? "Plan Sem 2 Course" : `Add ${activeCourseTerm === "summer" ? "Summer" : "Sem 2"} Course`,fields:[["code","Course code","COURSE"],["title","Course title","Course title"],["credits","Credits","6","number"],["status","Status","Planned"],["plan","Plan / note",""]],save(v){const term = activeCourseTerm === "sem1" ? "sem2" : activeCourseTerm; state.futureCourses.push({id:crypto.randomUUID(),term,...v,credits:Number(v.credits||0)}); activeCourseTerm = term;}},
    component:{title:"Add Grading Component",fields:[["course","Course code",presetCourse || state.courses.find(c=>!c.passFail)?.code || "COURSE"],["name","Component","Assessment"],["weight","Weight %","0","number"],["earned","Score","","number"],["max","Out of","100","number"],["source","Source / note",""]],save(v){state.components.push({id:crypto.randomUUID(),...v,weight:Number(v.weight||0),max:Number(v.max||100)});}},
    deadline:{title:"Add Calendar Item",fields:[["course","Course code",state.courses[0]?.code||"COURSE"],["title","Title","Deadline"],["date","Date",new Date().toISOString().slice(0,10),"date"],["type","Type","Assessment"]],save(v){state.deadlines.push({id:crypto.randomUUID(),...v});}}
  };
  const cfg = configs[type];
  $("#dialogTitle").textContent = cfg.title;
  $("#dialogFields").innerHTML = cfg.fields.map(([name,label,value,inputType="text"]) => `<label class="field">${label}<input name="${name}" type="${inputType}" value="${esc(value)}"></label>`).join("");
  $("#entryDialog").onsubmit = event => { if (event.submitter?.value === "cancel") return; cfg.save(Object.fromEntries(new FormData(event.target).entries())); save(); render(); };
  $("#entryDialog").showModal();
}
function applyMigrations() {
  if (!state.migrations.econ1210Quiz1Waived) {
    const quiz = (state.subcomponents || []).find(item =>
      item.course === "ECON1210" &&
      item.category === "Weekly assignments" &&
      item.name === "Weekly quiz 1"
    );
    if (quiz) {
      quiz.waived = true;
      quiz.earned = "";
      quiz.source = quiz.source?.includes("Waived") ? quiz.source : `${quiz.source || ""} Waived.`.trim();
    }
    state.migrations.econ1210Quiz1Waived = true;
    save();
  }
  if (!state.migrations.hudtQuiz1Deadline) {
    const exists = (state.deadlines || []).some(item => item.course === "HUDT1001" && item.title === "In-class quiz 1");
    if (!exists) state.deadlines.push({id:crypto.randomUUID(),course:"HUDT1001",title:"In-class quiz 1",date:"2026-09-28",type:"Quiz"});
    state.migrations.hudtQuiz1Deadline = true;
    save();
  }
  if (!state.migrations.ailtCourseBlockDates) {
    state.classMeetings = (state.classMeetings || []).filter(item => item.course !== "AILT1001");
    expandClassPatterns(courseBlockPatterns).forEach(item => state.classMeetings.push(item));
    state.deadlines = (state.deadlines || []).filter(item => item.course !== "AILT1001");
    [
      {id:crypto.randomUUID(),course:"AILT1001",title:"Shanghai check-in, 12:00 PM to 5:00 PM",date:"2026-10-11",type:"Travel"},
      {id:crypto.randomUUID(),course:"AILT1001",title:"Artificial Intelligence Literacy I begins",date:"2026-10-12",type:"Reading week"},
      {id:crypto.randomUUID(),course:"AILT1001",title:"Artificial Intelligence Literacy I ends",date:"2026-10-16",type:"Reading week"},
      {id:crypto.randomUUID(),course:"AILT1001",title:"Shanghai check-out / travel day",date:"2026-10-17",type:"Travel"}
    ].forEach(item => state.deadlines.push(item));
    const course = (state.courses || []).find(item => item.code === "AILT1001");
    if (course) course.plan = "Pass/fail - check-in Oct 11, course Oct 12-16, check-out Oct 17";
    state.migrations.ailtCourseBlockDates = true;
    save();
  }
}
applyMigrations();
render(); setActive(location.hash.slice(1) || "dashboard", false);
