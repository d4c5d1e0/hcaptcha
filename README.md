# hCaptcha Analysis
## Basic Info

This script was introduced early June 2022 with version `1.10.7/b78be28`

You can fetch the script at this URL: `https://newassets.hcaptcha.com/i/{VERSION_HASH?}/e` but it's encrypted, after being fetched it's decrypted inside the WebAssembly and executed.

It collects various device fingerprinting data, most of them are listed below.

Current version 13-09-2022: `1.17.1/d5ef5ba`

Parameters explanation: `1.15.1`


# Parameters

### 101
- Result: `Array`
- Value: `[window.screen.width,window.screen.height]`
- Hashed: **false**
### 102
- Result: `bool`
- Value: Screen properties check (see script for more info)
- Hashed: **false**
### 103
- Result: `Array`
- Value: Screen properties check (see script for more info)
- Hashed: **false**
### 201
- Result: `Array`
- Value: Looks like some sort of CSS Fingerprinting (Firefox hash is the not the same as the Chrome one)
- Hashed: **true**
### 202
- Result: `Array`
- Value: Don't really know how to explain this one (see script for more info)
- Hashed: **false**
### 301
- Result: `Array`
- Value: CSS Properties list (hash is different accross browsers but shared between devices)
- Hashed: **true**
### 302
- Result: `Object`
- Value: Looks like some sort of CSS Fingerprinting (hash is different accross browsers but shared between devices)
### 303
- Result: `Array`
- Value: Fonts but weird // TODO
- Hashed: **false**
### 304
- Result: `Number`
- Value: length of CSS properties 
- Hashed: **false**
### 401
- Result: `Array`
- Value: `Object.getOwnPropertyNames(window)`
- Hashed: **true**
### 402
- Result: `Number`
- Value: `Object.getOwnPropertyNames(window).length`
- Hashed: **true**
### 501
- Result: `Array`
- Value: Supported media sources
- Hashed: **true**
### 601
- Result: `String`
- Value: User-Agent
- Hashed: **false**
### 602
- Result: `Object`
- Value: Checks the integrity of the navigator object properties
- Hashed: **true**
### 603
- Result: `Array`
- Value: `[deviceMemory,hardwareConcurrency]`
- Hashed: **false**
### 701
- Result: `Bool`
- Value: Firefox only. Purpose: ???
- Hashed: **false**
### 702
- Result: `Array`
- Value: `navigator.userAgentData.getHighEntropyValues(["platform","platformVersion","model","bitness","architecture","uaFullVersion"])`
- Hashed: **false**
### 703
- Result: `Array`
- Value: `navigator.userAgentData.getHighEntropyValues(["platform","platformVersion","model","bitness","architecture"])`
- Hashed: **false**
### 801
- Result: `Array`
- Value: See script for more info
- Hashed: **true**
### 901
- Result: `Array`
- Value: Some voices fingerprinting data
- Hashed: **true**
### 1001
- Result: `Array`
- Value: Audio Fingerprinting
- Hashed: **true**
### 1002
- Result: `Bool`
- Value: Detect lie about your audio fingerprint (i guess?)
- Hashed: **false**
### 1101
- Result: `String`
- Value: Canvas fingerprinting
- Hashed: **true**
### 1102
- Result: `Bool`
- Value: TBD 
- Hashed: **false**
### 1201
- Result: `Array`
- Value: Sort of CSS fingerprinting (not used?)
- Hashed: **true**
### 1301
- Result: `Array`
- Value: Fonts installed on the system 
- Hashed: **false**
### 1401
- Result: `String`
- Value: TimeZone
- Hashed: **false**
### 1402
- Result: `Array`
- Value: `[Timezone,See script,new Date("1/1/1970").getTimezoneOffset(),See script,See script]`
- Hashed: **false**
### 1501
- Result: `Array`
- Value: navigator.mediaDevices.enumerateDevices()
- Hashed: **true**
### 1601
- Result: `Bool`
- Value: TBD (related to bluetooth?)
- Hashed: **false**
### 1701
- Result: `Array`
- Value: WebRTC fingerprinting
- Hashed: **true**
### 1801
- Result: `Array`
- Value: WebRTC fingerprinting
- Hashed: **true**
### 1901
- Result: `Array`
- Value: Math Fingerprinting, Hash is different across browser types
- Hashed: **true**
### 2001
- Result: `Array`
- Value: Navigator Permissions
- Hashed: **true**
### 2002
- Result: `Array`
- Value: Notification Permissions
- Hashed: **false**
### 2201
- Result: `Array`
- Value: Codecs testing (some sort of audio hash?)
- Hashed: **true**
### 2301
- Result: `String`
- Value: Worker User-Agent
- Hashed: **false**
### 2302
- Result: `Bool`
- Value: Is worker User-Agent same as Browser
- Hashed: **false**
### 2303
- Result: `Array`
- Value:   Languages and Locale from Worker + language from browser
- Hashed: **false**
### 2304
- Result: `Array`
- Value: Some errors from the Worker
- Hashed: **false**
### 2401
- Result: `Array`
- Value: WebGL properties hash
- Hashed: **true**
### 2402
- Result: `Array`
- Value: WebGL Vendor & Renderer
- Hashed: **false**
### 2403
- Result: `Array`
- Value: WebGL2 Vendor & Renderer
- Hashed: **false**
### 2501
- Result: `Array`
- Value: WebGL Fingerprinting 
- Hashed: **true**
### 2601
- Result: `Array`
- Value: Checks for known automation extensions
- Hashed: **false**
### 2701
- Result: `Array`
- Value: [lengthOfSomeFunctions,Object.getOwnPropertyNames(window.chrome || {}),check if it's a process]
- Hashed: **false**
### 2702
- Result: `Array`
- Value: Navigator properties check (brand,mobile,platform)
- Hashed: **false**
### 2703
- Result: `String`
- Value: if ran in electron get the name of the App
- Hashed: **false**
### 2801
- Result: `Array`
- Value: Audio Fingerprinting
- Hashed: **true**
### 2802
- Result: `Number`
- Value: Total length of the properties
- Hashed: **false**
### 2803
- Result: `Array`
- Value: Checks some properties related to the navigator and Window
- Hashed: **false**
### 2901
- Result: `Array`
- Value: Checks some properties related to the navigator and Window
- Hashed: **false**
### 3001
- Result: `Array`
- Value: Checks integrity of all Window functions
- Hashed: **true**
### 3002
- Result: `Number`
- Value: Length of all window function (not sure lol)
- Hashed: **false**
