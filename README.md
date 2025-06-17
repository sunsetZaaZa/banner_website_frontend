
# Wickerblocks Website
This version of the website has a proof of concept system animating any HTML element to move around a webpage. It lacks a frame pacing system within EngineCycle so any scheme can be dropped in place that best suits how everything needs to look and function. The function EngineCycle within the NavGuide component could be moved into a separate file and exported. This would clean up NavGuide by separating concerns and keeping UI and UI logic compartmentalized.

  
## Animation System POC Notes
There are several models within the folder state-management, a breakdown is below:

**Models - folder**
<ul>
<li>AnimationStats</li>
<p>Data Structures and Enums for configuring how an animation should be adjust during a call to function EngineForward</p>
<li>CharacterStats</li>
<p>Data Stucture for storing the runtime data about an HTML element that should be animated. The enum is for defining animation behavior during a phase of EngineForward.</p>
<li>PageAnimationInfluence</li>
<p>Augment how the animation should progress through. This could be removed while keeping all update logic within seperate functions. An Enum/Option could be selected at random then mixed into the pathing update logic.</p>
<li>RuntimeAnimationMetadata</li>
<p>Track how many characters or HTML elements should exist. Could be used for keeping track of characters that have been removed from the Redux store then adding to the total stored in RuntimeAnimationMetadata. Or the value of howMany could be increased or decreased then logic within the animation system can handle spawning and despawning character accordingly.</p>
</ul>


**Slices - folder**
<ul>
<li>AnimationSlice</li>
<p>Redux slice for handling core functionality of the animation system.</p>
</ul>

**Presets - folder**
<ul>
<li>AnimationPreset</li>
<p>Prebuilt structure for the initial state that is required by the function createSlice.</p>
</ul>
