.. You should enable this project on travis-ci.org and coveralls.io to make
   these badges work. The necessary Travis and Coverage config files have been
   generated for you.

.. image:: https://travis-ci.org/okfn/ckanext-facetcollapse.svg?branch=master
    :target: https://travis-ci.org/okfn/ckanext-facetcollapse

.. image:: https://coveralls.io/repos/okfn/ckanext-facetcollapse/badge.svg
  :target: https://coveralls.io/r/okfn/ckanext-facetcollapse

.. image:: https://pypip.in/download/ckanext-facetcollapse/badge.svg
    :target: https://pypi.python.org/pypi//ckanext-facetcollapse/
    :alt: Downloads

.. image:: https://pypip.in/version/ckanext-facetcollapse/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-facetcollapse/
    :alt: Latest Version

.. image:: https://pypip.in/py_versions/ckanext-facetcollapse/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-facetcollapse/
    :alt: Supported Python versions

.. image:: https://pypip.in/status/ckanext-facetcollapse/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-facetcollapse/
    :alt: Development Status

.. image:: https://pypip.in/license/ckanext-facetcollapse/badge.svg
    :target: https://pypi.python.org/pypi/ckanext-facetcollapse/
    :alt: License

=============
ckanext-facetcollapse
=============

This extension makes the search facets collapsible. There are four available default states (configured in the admin panel):

- `Collapse all`
- `Collapse all but first`
- `Collapse empty`
- `Collapse none`

Some classes are added to each module, in case further styling is desirable:

- `expanded`
- `collapsed`
- `nothing-to-reveal` (when no facets match the search)


------------
Requirements
------------

This extension assumes that JQuery and Bootstrap are included (as they are by default).


------------
Installation
------------

.. Add any additional install steps to the list below.
   For example installing any non-Python dependencies or adding any required
   config settings.

To install ckanext-facetcollapse:

1. Activate your CKAN virtual environment, for example::

     . /usr/lib/ckan/default/bin/activate

2. Install the ckanext-facetcollapse Python package into your virtual environment::

     pip install ckanext-facetcollapse

3. Add ``facetcollapse`` to the ``ckan.plugins`` setting in your CKAN
   config file (by default the config file is located at
   ``/etc/ckan/default/production.ini``).

4. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu::

     sudo service apache2 reload


---------------
Config Settings
---------------

Configure the default state via the `Facet default` select, found on the `ckan-admin/config` page.


------------------------
Development Installation
------------------------

To install ckanext-facetcollapse for development, activate your CKAN virtualenv and
do::

    git clone https://github.com/okfn/ckanext-facetcollapse.git
    cd ckanext-facetcollapse
    python setup.py develop
    pip install -r dev-requirements.txt


..  -----------------
    Running the Tests
    -----------------

    To run the tests, do::

        nosetests --nologcapture --with-pylons=test.ini

    To run the tests and produce a coverage report, first make sure you have
    coverage installed in your virtualenv (``pip install coverage``) then run::

        nosetests --nologcapture --with-pylons=test.ini --with-coverage --cover-package=ckanext.facetcollapse --cover-inclusive --cover-erase --cover-tests


    ---------------------------------
    Registering ckanext-facetcollapse on PyPI
    ---------------------------------

    ckanext-facetcollapse should be availabe on PyPI as
    https://pypi.python.org/pypi/ckanext-facetcollapse. If that link doesn't work, then
    you can register the project on PyPI for the first time by following these
    steps:

    1. Create a source distribution of the project::

         python setup.py sdist

    2. Register the project::

         python setup.py register

    3. Upload the source distribution to PyPI::

         python setup.py sdist upload

    4. Tag the first release of the project on GitHub with the version number from
       the ``setup.py`` file. For example if the version number in ``setup.py`` is
       0.0.1 then do::

           git tag 0.0.1
           git push --tags


    ----------------------------------------
    Releasing a New Version of ckanext-facetcollapse
    ----------------------------------------

    ckanext-facetcollapse is availabe on PyPI as https://pypi.python.org/pypi/ckanext-facetcollapse.
    To publish a new version to PyPI follow these steps:

    1. Update the version number in the ``setup.py`` file.
       See `PEP 440 <http://legacy.python.org/dev/peps/pep-0440/#public-version-identifiers>`_
       for how to choose version numbers.

    2. Create a source distribution of the new version::

         python setup.py sdist

    3. Upload the source distribution to PyPI::

         python setup.py sdist upload

    4. Tag the new release of the project on GitHub with the version number from
       the ``setup.py`` file. For example if the version number in ``setup.py`` is
       0.0.2 then do::

           git tag 0.0.2
           git push --tags
