# MantisHub REST APIs

MantisHub offers a REST API that allows remotely accessing MantisHub from your language of choice. The API can provide a great way to integrate MantisHub into your build system, IDEs, test management systems, other SaaS applications, or your own applications.

For a full list of MantisHub APIs and their documentation follow [this link](https://documenter.getpostman.com/view/29959/mantis-bug-tracker-rest-api/7Lt6zkP#intro). If you don't already have Postman installed you can [download it here](https://www.getpostman.com/apps).  Postman works for Windows, Mac, and Linux.

**Authentication**

To access the REST API you will need to [generate an API token](/api/connecting_mh_api_tokens). If however, you have enabled public access to MantisHub via [anonymous access](/customizations/anon_access) then an access token is not required.  

**REST Endpoint**

To access the target instance replace the first `“yourmantishubname”` in the URL below with the MantisHub sub-domain.  Note that the URL below represent the base path for all REST APIs.

`https://yourmantishubname.mantishub.io/api/rest/`

Sample Request using curl from your terminal window.
 
Get all issues that are unassigned

`curl --request GET \
  --url 'https://yourmantishubname.mantishub.io/api/rest/issues?filter_id=unassigned' \
  --header 'Authorization: replace-with-user-api-token'`

**API Resources**

- **Issues** - Retrieve one issue, retrieve issues matching a filter, create, delete or update issues, add notes, tags, relationships, attachments, etc.
- **Projects** - Get a full list of all projects accessible to logged in user along with project specific configuration like categories, versions, custom fields, etc.
- **Filters** - Retrieve all filters definitions, a single filter definition, or delete filters.
- **Users** - Create or delete users or retrieve your user information.
- **Configuration** - Retrieve one or many configuration options. 
- **Localized Strings** - Retrieve one or many Local Strings.


The API library is still growing so be sure to refer to the [Postman documentation](https://documenter.getpostman.com/view/29959/mantis-bug-tracker-rest-api/7Lt6zkP#intro) for the most up-to-date API definitions.

**Command Line**

For command line access, we have implemented a [PowerShell module](https://github.com/mantishub/mantis-powershell) based on Microsoft Powershell core which works on Windows, Mac, and Linux.

It is also possible to use **curl** to access the REST API from the command line.  curl is available by default for Mac and Linux distributions. 

**Client Libraries**

You can use any HTTP or REST API library of choice for the language used to access MantisHub.

**What about SOAP API?**

The REST API is the recommended way to integrate with MantisHub.  The SOAP API is on a deprecation path.  It is recommended that integrations using SOAP API switch to REST API since SOAP API will be removed in a future release.

