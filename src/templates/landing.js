import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';


import components, {Layout} from '../components/index';

const urlPropsQueryConfig = {
    c: { type: UrlQueryParamTypes.string },
};

class Landing extends React.Component {
    static propTypes = {
        // URL props are automatically decoded and passed in based on the config
        c: PropTypes.string,
     
        // change handlers are automatically generated when given a config.
        // By default they update that single query parameter and maintain existing
        // values in the other parameters.
        onChangeC: PropTypes.func,
      }
     
    static defaultProps = {
        c: 'default',
    }

    render() {
        const { c } = this.props;

        console.log(c);

        return (
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections'), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type')));
                let Component = components[component];

                console.log(section);
                const campaign = _.get(section, 'campaign');
                if ((!campaign && c === 'default') || (campaign && campaign === c)){
                    return (
                    <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                    )
                } else {
                    return 
                }
            })}
            </Layout>
        );
    }
}

export default addUrlProps({ urlPropsQueryConfig })(Landing);
