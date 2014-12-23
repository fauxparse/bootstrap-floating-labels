Bootstrap floating labels
=========================

A new placeholder UI design for Bootstrap forms.
Inspired by Mark D. Smith's
[Dribbble post](http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction?list=users)
and @jverdi's [JVFloatLabeledTextField](https://github.com/jverdi/JVFloatLabeledTextField).

Requirements
------------
* Bootstrap 3.0
* jQuery 1.10.x or later
* Taste

Usage
-----
Just include `floating-labels.css` and `floating-labels.js`, then add the
`floating-label-form-group` class to any `form-group`s you want to attach
the behaviour to.

Example
-----
<div class="form-group floating-label-form-group">
  <label for="exampleInputPassword1">Password</label>
  <input type="password" class="form-control " id="exampleInputPassword1" placeholder="Password">
</div>

Should work anywhere Bootstrap works.
