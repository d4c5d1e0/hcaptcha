# hCaptcha Analysis
## Basic Info

This script was introduced early June 2022 with version `1.10.7/b78be28`

You can fetch the script at this URL: `https://newassets.hcaptcha.com/i/{VERSION_HASH?}/e` but it's encrypted, after being fetched it's decrypted inside the WebAssembly and executed.

It collects various device fingerprinting data, most of them are listed below.

Current version 17-06-2022: `1.11.0/f147ef1`

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
- Hashed: **true**
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
### 701
- Result: `Bool`
- Value: Firefox only. Purpose: ???
- Hashed: **false**
### 702
- Result: `Array`
- Value: `navigator.userAgentData.getHighEntropyValues(["platform","platformVersion","model","bitness","architecture","uaFullVersion"])`
- Hashed: **false**
### 801
- Result: `Array`
- Value: See script for more info
- Hashed: **true**
