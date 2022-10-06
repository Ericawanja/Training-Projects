# Combinator selectors

## 2. Adjacent sibling
> syntax 
>>>>> div + tag

This selector selects the elemnt immediately after.
For instance `div +p` will select the element immediately after the div container.

```
<style>
div + p{
    color:yellow;
}
</style>
<div>
<p>first paragraph</p>
<p>Second paragraph</p>
</div>
<p>Third paragraph, will be selected </p>
```

## 3. General sibling

syntax:
>> div ~ selector

Selects all the siblings of the used selector

For instance `div ~ p` will select all the paragraph elements that are next after div closing tag.