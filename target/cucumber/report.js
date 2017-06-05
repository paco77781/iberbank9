$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality no exists 1",
  "description": "",
  "id": "cucumberjava;login-functionality-no-exists-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter Usuario as \"trytryte\" and Contrasena as \"trytryte\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 14248899241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "trytryte",
      "offset": 20
    },
    {
      "val": "trytryte",
      "offset": 49
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 18310170510,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 9170259597,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login functionality no exists 2",
  "description": "",
  "id": "cucumberjava;login-functionality-no-exists-2",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I enter Usuario as \"\" and Contrasena as \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 13473767399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "",
      "offset": 41
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 16445042910,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 9082289594,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Login functionality no exists 3",
  "description": "",
  "id": "cucumberjava;login-functionality-no-exists-3",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I enter Usuario as \"pepepotamo\" and Contrasena as \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 13386559886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pepepotamo",
      "offset": 20
    },
    {
      "val": "",
      "offset": 51
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 16101839814,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 9153520716,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login functionality no exists 4",
  "description": "",
  "id": "cucumberjava;login-functionality-no-exists-4",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter Usuario as \"\" and Contrasena as \"pepe\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "login should be unsuccessful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 14021198792,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    },
    {
      "val": "pepe",
      "offset": 41
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 17562551211,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbeunsuccessful()"
});
formatter.result({
  "duration": 9068439027,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I open the app",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I enter Usuario as \"iber4\" and Contrasena as \"iber4\"",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberJava.openDevices()"
});
formatter.result({
  "duration": 13267373079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iber4",
      "offset": 20
    },
    {
      "val": "iber4",
      "offset": 46
    }
  ],
  "location": "cucumberJava.I_enter_Usuario_as_and_Contrasena_as(String,String)"
});
formatter.result({
  "duration": 18578004591,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.loginshouldbesuccessful()"
});
formatter.result({
  "duration": 28450723747,
  "status": "passed"
});
});