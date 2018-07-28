## Table of Contents

* [Layout Modifications](#layout-modifications)
    *[Cores Component](#cores-component)
    *[Feedback Component](#feedback-component)
    *[Schedule Component](#schedule-component)
    *[Place Component](#place-component)
    *[Instructions Component](#instructions-component)
    *[Router Component](#router-component)
        **[Schedule Component](#schedule-component)
* [Functionality Modifications](#functionality-modifications)
    *[Header Component](#main-header-component)
    *[Data Manager CalculateDistance](#data-manager-calculate-distance)

## Layout Modifications

Previous layout changed comunication codes from main buttons to feedback buttons, which appear just as
information chunks.

Changed the latter to make them evident buttons. 


### Cores Component

Added title "Agéndate" and explanation note above and below the `individual` and `double` buttons.


### Feedback Component

Changed buttons style to make them evident to be interactive. Changed each one lay-out from `column` to `row`, and replace icons te reduce color saturation.

Added `color` property in `data` obeject `feedbackChunks` to give a different one to each button:

Strengths "#4682B4"
Oportunities "#537A9A"
Resources "#4D6171"


### Router Component

#### Schedule Component

Change previous skills for topics instead. Replaced colored icons for outlines.


### Place Component

Made `View` map containing responsive to screen `Dimensions` to get the Screen Height/1.5. Not functional in larger definition screens.

Re-design layout entirely, similar to the mobility apps: full screen map, upper bar with address, modal for indications and confirmation.

Also map style changed to clear. Reduces contrast and makes the whole checkout more solid.


### Instructions Component

Some instructions Items where no fully visible. Adjusted height property to fix it.


### Router Component

Change label 'Skill' into 'Tema'.




## Functionality Modifications

Previous version showed two relevant bugs: due session still apperead on MainHeader component as if pending session. Also, user could schedule a new session even if they had not scored previous guide.

### Main Header

### Data Manager CalculateDistance

Using Haversine formula. Error calculating Arc:

Before  
var Arc = pow(sin(deltaOne/2), 2) + cos(thetaUsr) * cos(thetaGd) * sin(deltaTwo/2)

Correction
  var Arc = pow(sin(deltaOne/2), 2) + cos(thetaUsr)  *cos(thetaGd) * pow(sin(deltaTwo/2), 2)





