import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit


def facetcollapse_default():
    '''facetcollapse helper function.'''

    return toolkit.config.get('ckanext.facetcollapse.default', 'collapse')


class FacetcollapsePlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, 'templates')
        toolkit.add_public_directory(config_, 'public')
        toolkit.add_resource('fanstatic', 'facetcollapse')

    def get_helpers(self):
        return {'facetcollapse_default': facetcollapse_default}

    def update_config_schema(self, schema):

        ignore_missing = toolkit.get_validator('ignore_missing')
        unicode_safe = toolkit.get_validator('unicode_safe')

        schema.update({

            # This is a custom configuration option
            'ckanext.facetcollapse.default': [ignore_missing, unicode_safe],
        })

        return schema
