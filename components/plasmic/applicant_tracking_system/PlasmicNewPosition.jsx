// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4WdhSVfyEYnextDzQgbzVw
// Component: 76Byxvt0f21f
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: 790e77KXjH90/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponentHelper
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_applicant_tracking_system.module.css"; // plasmic-import: 4WdhSVfyEYnextDzQgbzVw/projectcss
import sty from "./PlasmicNewPosition.module.css"; // plasmic-import: 76Byxvt0f21f/css

createPlasmicElementProxy;

export const PlasmicNewPosition__VariantProps = new Array();

export const PlasmicNewPosition__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPosition__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        refName: "form",
        onMutate: p.generateOnMutateForSpec("value", FormWrapper_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();
  const new$Queries = {
    depts: usePlasmicDataOp(() => {
      return {
        sourceId: "bVbbifmpQzHjtg5zdWgt8C",
        opId: "418a98da-e0fe-4eaa-8c0c-dfb0083dab1f",
        userArgs: {},
        cacheKey: "plasmic.$..$..$.418a98da-e0fe-4eaa-8c0c-dfb0083dab1f.$.",
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"New position"}
                  </h1>
                  {(() => {
                    const child$Props = {
                      children: null,
                      className: classNames("__wab_instance", sty.form),
                      extendedOnValuesChange:
                        p.generateStateOnChangePropForCodeComponents(
                          $state,
                          "value",
                          ["form", "value"],
                          FormWrapper_Helpers
                        ),
                      formItems: (() => {
                        const __composite = [
                          { inputType: "Text", name: null, label: null },
                          { inputType: "Text", label: null, name: null },
                          {
                            inputType: null,
                            name: null,
                            label: null,
                            options: null
                          }
                        ];

                        __composite["0"]["name"] = "title";
                        __composite["0"]["label"] = "Title";
                        __composite["1"]["label"] = "Description";
                        __composite["1"]["name"] = "description";
                        __composite["2"]["inputType"] = "Select";
                        __composite["2"]["name"] = "department_id";
                        __composite["2"]["label"] = "Department";
                        __composite["2"]["options"] = $queries.depts.data.map(
                          d => ({ label: d.name, value: d.id })
                        );
                        return __composite;
                      })(),
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: "simplified",
                      onFinish: async values => {
                        const $steps = {};
                        $steps["tutorialdbCreate"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "bVbbifmpQzHjtg5zdWgt8C",
                                  opId: "a1defbbe-3532-4cd0-b6f2-67f6525c0965",
                                  userArgs: {},
                                  cacheKey:
                                    "plasmic.$..$..$.a1defbbe-3532-4cd0-b6f2-67f6525c0965.$.",
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: null
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          typeof $steps["tutorialdbCreate"] === "object" &&
                          typeof $steps["tutorialdbCreate"].then === "function"
                        ) {
                          $steps["tutorialdbCreate"] = await $steps[
                            "tutorialdbCreate"
                          ];
                        }
                        $steps["goToPositions"] = true
                          ? (() => {
                              const actionArgs = {};
                              return (({ destination }) => {
                                __nextRouter?.push(destination);
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          typeof $steps["goToPositions"] === "object" &&
                          typeof $steps["goToPositions"].then === "function"
                        ) {
                          $steps["goToPositions"] = await $steps[
                            "goToPositions"
                          ];
                        }
                      },
                      ref: ref => {
                        $refs["form"] = ref;
                      },
                      submitSlot: (
                        <AntdButton
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames("__wab_instance", sty.button)}
                          size={"large"}
                          submitsForm={true}
                          type={"primary"}
                        >
                          <div
                            data-plasmic-name={"text"}
                            data-plasmic-override={overrides.text}
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text
                            )}
                          >
                            {"Submit"}
                          </div>
                        </AntdButton>
                      ),

                      wrapperCol: { span: 16, horizontalOnly: true }
                    };
                    p.initializeCodeComponentStates(
                      $state,
                      [
                        {
                          name: "value",
                          plasmicStateName: "form.value"
                        }
                      ],

                      [],
                      FormWrapper_Helpers ?? {},
                      child$Props
                    );
                    return (
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        {...child$Props}
                      />
                    );
                  })()}
                </section>
              )}
            </ph.DataCtxReader>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "section", "h1", "form", "button", "text"],
  pageLayout: ["pageLayout", "section", "h1", "form", "button", "text"],
  section: ["section", "h1", "form", "button", "text"],
  h1: ["h1"],
  form: ["form", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPosition__ArgProps,
          internalVariantPropNames: PlasmicNewPosition__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPosition__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPosition";
  } else {
    func.displayName = `PlasmicNewPosition.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <p.PlasmicPageGuard
      minRole={null}
      appId={"4WdhSVfyEYnextDzQgbzVw"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </p.PlasmicPageGuard>
  );

  return PageGuard;
}

function withUsePlasmicAuth(WrappedComponent) {
  const WithUsePlasmicAuthComponent = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "4WdhSVfyEYnextDzQgbzVw"
    });
    return (
      <p.PlasmicDataSourceContextProvider
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </p.PlasmicDataSourceContextProvider>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicNewPosition = Object.assign(
  // Top-level PlasmicNewPosition renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicNewPosition
    internalVariantProps: PlasmicNewPosition__VariantProps,
    internalArgProps: PlasmicNewPosition__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPosition;
/* prettier-ignore-end */
