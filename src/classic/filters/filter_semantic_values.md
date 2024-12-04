# Filtering on Semantic Values

Filters often are based on static values like “v1” for a version. However, in other cases it is desirable to use semantic values. Such values include:

- [any] - don’t filter on this field.
- [none] - field must not be set (e.g. issue not assigned).
- [myself] - issue assigned to the logged in user.

Now, why would we need “[myself]” compared to “vboctor”. Such value is very important when defining filters with the intention of sharing. For example, “My Blocking Issues” can be defined as: priority=blocking and assign-to=[myself]. Then this filter can be saved as Public (i.e. shared with all users) and All Projects (i.e. applies to all projects).