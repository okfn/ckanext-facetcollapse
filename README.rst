.. image:: https://github.com/okfn/ckanext-facetcollapse/workflows/Tests%20Facet%20Collapse%20Extension%20on%20CKAN%202.10/badge.svg
   :target: https://github.com/okfn/ckanext-facetcollapse/actions/workflows/test-ckan-2.10.yml
   :alt: CKAN 2.10

.. image:: https://github.com/okfn/ckanext-facetcollapse/workflows/Tests%20Facet%20Collapse%20Extension%20on%20CKAN%202.11/badge.svg
   :target: https://github.com/okfn/ckanext-facetcollapse/actions/workflows/test-ckan-2.11.yml
   :alt: CKAN 2.11

=====================
ckanext-facetcollapse
=====================

| This extension makes the search facets collapsible.
| This includes facets for the dataset and organization pages.
| 
.. image:: https://i.imgur.com/lTn4bZB.png


There are four available default states, which can be set via the ``ckanext.facetcollpase.default`` configuration option:

- Collapse all: ``collapse`` (This is the default value)
- Collapse all but first: ``expand-first``
- Collapse empty: ``expand-navs``
- Collapse none: ``expand-all``

This settings can also be modified via the `Administrator Interface <http://docs.ckan.org/en/latest/sysadmin-guide.html#customizing-look-and-feel>`_:

.. image:: https://i.imgur.com/CB4BkTy.png

Some classes are added to each module, in case further styling is desirable:

- ``expanded``
- ``collapsed``
- ``nothing-to-reveal`` (when no facets match the search)


------------
Requirements
------------

This extension assumes that JQuery and Bootstrap are included (as they are by default).


------------
Installation
------------

To install ckanext-facetcollapse for development, activate your CKAN virtualenv and
do::

    git clone https://github.com/okfn/ckanext-facetcollapse.git
    cd ckanext-facetcollapse
    python setup.py develop

Add the plugin to CKAN settings with

    ckan.plugins = facetcollapse
