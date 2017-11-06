(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest("assets/test.xml"));

  function makeRequest(asset) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', asset);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var xmldoc = httpRequest.responseXML;
        var root_node = xmldoc.getElementsByTagName('root').item(0);
        alert(root_node.firstChild.data);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
