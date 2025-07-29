import pytest
from ckan import plugins


@pytest.mark.usefixtures("with_plugins")
def test_plugin():
    assert plugins.plugin_loaded("facetcollapse")
