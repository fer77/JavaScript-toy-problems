// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url) {
    var removeScheme,
        noScheme,
        host,
        scheme = /https?:\/\/(?=www)/.test(url);
      
    if (scheme ==! true) {
  
      removeScheme = url.replace(/https?:\/\//, '');
      noScheme = removeScheme.replace(/www./, '');
      host = noScheme.replace(/\..*$/, '');
  
    } else {
  
      removeScheme = url.replace(/https?:\/\/www./, '');
      host = removeScheme.replace(/\..*$/, '');
  
    }
  
    return host;
  }

// Other more clever solutions than mine:

function domainName(url){
    // Needs to be tested against subdomains.
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }

  // and 

  function domainName(url){  
    return url.replace(/.+\/\/|www.|\..+/g, '')
  }