function EnableDisableTextBox(chkOthers) {
  var OtherField = document.getElementById('other');
  OtherField.disabled = chkOthers.checked ? false : true;
  if (!OtherField.disabled) {
    OtherField.focus();
  }
}

$(function () {
  $('input').change(function () {
    var name = $(".fname").val() != '' ? true : false;
    var state = $(".state-ut").val() != '' ? true : false;
    var dist = $(".dist").val() != '' ? true : false;
    var lang = false; var day = false; var time = false; var verify = false; var discord = false;
    $(".lang").each(function () {
      if ($(this).prop('checked')) {
        lang = true;
        return false;
      }
    });
    $(".day").each(function () {
      if ($(this).prop('checked')) {
        day = true;
        return false;
      }
    });
    $(".time").each(function () {
      if ($(this).prop('checked')) {
        time = true;
        return false;
      }
    });
    $(".verify").each(function () {
      if ($(this).prop('checked')) {
        verify = true;
        return false;
      }
    });
    $(".discord").each(function () {
      if ($(this).prop('checked')) {
        discord = true;
        return false;
      }
    });
    var phone = $(".phonenumber").val() != '' ? true : false;
    console.log(name, state, dist, lang, day, time, verify, discord, phone);
    if (name && state && dist && lang && day && time && verify && discord && phone) {
      $(".overlap-group5").html('<button class="button" id="open-button" onclick="openForm()"><span style="color: white">Submit</span></button>');
    } else {
      $(".overlap-group5").html('');
    }
  });
});

}
function specifyRate(paid) {
  var Rate = document.getElementById("Rate");
  Rate.disabled = paid.checked ? false : true;
  if (!Rate.disabled)
    Rate.focus();
}
function disableRateBox(free) {
  var Rate = document.getElementById("Rate");
  Rate.disabled = free.checked ? true : false;
  if (Rate.disabled) {
    document.getElementById("Rate").value = "NiLL";
    Rate.blur();
  }
}
function specifytiming(forSpecificHrs) {
  var serviceTiming = document.getElementById("serviceTiming");
  serviceTiming.disabled = forSpecificHrs.checked ? false : true;
  if (!serviceTiming.disabled)
    serviceTiming.focus();
}
function disableServiceBox(fullTimeService) {
  var serviceTiming = document.getElementById("serviceTiming");
  serviceTiming.disabled = fullTimeService.checked ? true : false;
  if (serviceTiming.disabled) {
    serviceTiming.blur();
    document.getElementById("serviceTiming").value = "NILL";
  }
}
function enableDisableOtherBox(Other) {
  var otherBox = document.getElementById("otherBox");
  otherBox.disabled = Other.checked ? false : true;
  if (!otherBox.disabled)
    otherBox.focus();
  else {
    otherBox.blur();
    document.getElementById("otherBox").value = "NILL";
  }
}
