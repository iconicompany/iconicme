// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4WdhSVfyEYnextDzQgbzVw
// Component: MGAad-_nMfUW
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
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
import sty from "./PlasmicCandidate.module.css"; // plasmic-import: MGAad-_nMfUW/css

createPlasmicElementProxy;

export const PlasmicCandidate__VariantProps = new Array();

export const PlasmicCandidate__ArgProps = new Array();

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCandidate__RenderFunc(props) {
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
  const { cache, mutate: swrMutate } = usePlasmicDataConfig();
  const mutate = swrMutate;
  const new$Queries = {
    positions: usePlasmicDataOp(() => {
      return {
        sourceId: "bVbbifmpQzHjtg5zdWgt8C",
        opId: "8d2fd7c4-544c-4294-a2af-72f4a9338c64",
        userArgs: {},
        cacheKey: "plasmic.$..$..$.8d2fd7c4-544c-4294-a2af-72f4a9338c64.$.",
        invalidatedKeys: null,
        roleId: "3a39aa04-d095-4ea1-9803-57565a425707"
      };
    }),
    candidate: usePlasmicDataOp(() => {
      return {
        sourceId: "bVbbifmpQzHjtg5zdWgt8C",
        opId: "39490889-7078-476c-8652-fb327bb4ddb2",
        userArgs: {
          filters: [$ctx.params.id]
        },
        cacheKey: "plasmic.$..$..$.39490889-7078-476c-8652-fb327bb4ddb2.$.",
        invalidatedKeys: null,
        roleId: "3a39aa04-d095-4ea1-9803-57565a425707"
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
                    <React.Fragment>
                      {(() => {
                        try {
                          return $queries.candidate.data[0].name;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return "Candidate";
                          }
                          throw e;
                        }
                      })()}
                    </React.Fragment>
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
                          {
                            inputType: "Text",
                            name: null,
                            label: null,
                            rules: null
                          },
                          {
                            inputType: "Text",
                            label: null,
                            name: null,
                            rules: null
                          },
                          { inputType: "Text", label: null, name: null },
                          { inputType: "Text", label: null, name: null },
                          {
                            inputType: null,
                            label: null,
                            options: null,
                            name: null,
                            rules: null
                          },
                          { inputType: null, label: null, name: null }
                        ];

                        __composite["0"]["name"] = "name";
                        __composite["0"]["label"] = "Name";
                        __composite["0"]["rules"] = [
                          { ruleType: "required" },
                          { ruleType: "min", length: 3 }
                        ];

                        __composite["1"]["label"] = "Email";
                        __composite["1"]["name"] = "email";
                        __composite["1"]["rules"] = [];
                        __composite["2"]["label"] = "Phone";
                        __composite["2"]["name"] = "phone";
                        __composite["3"]["label"] = "Resume URL";
                        __composite["3"]["name"] = "resume_url";
                        __composite["4"]["inputType"] = "Select";
                        __composite["4"]["label"] = "Applied for";
                        __composite["4"]["options"] =
                          $queries.positions.data.map(p => ({
                            label: p.title,
                            value: p.id
                          }));
                        __composite["4"]["name"] = "position_id";
                        __composite["4"]["rules"] = [{ ruleType: "required" }];
                        __composite["5"]["inputType"] = "Text Area";
                        __composite["5"]["label"] = "Notes";
                        __composite["5"]["name"] = "notes";
                        return __composite;
                      })(),
                      initialValues: (() => {
                        try {
                          return $queries.candidate.data[0];
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      labelCol: { span: 8, horizontalOnly: true },
                      layout: "vertical",
                      mode: "simplified",
                      onFinish: async values => {
                        const $steps = {};
                        $steps["tutorialdbUpdateMany"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "bVbbifmpQzHjtg5zdWgt8C",
                                  opId: "5a9ac9f9-8647-484a-a983-a24a528896e9",
                                  userArgs: {
                                    conditions: [$ctx.params.id]
                                  },
                                  cacheKey:
                                    "plasmic.$..$..$.5a9ac9f9-8647-484a-a983-a24a528896e9.$.",
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: "3a39aa04-d095-4ea1-9803-57565a425707"
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
                                  if (
                                    dataOp.invalidatedKeys &&
                                    dataOp.invalidatedKeys.find(
                                      key => key === "plasmic_refresh_all"
                                    )
                                  ) {
                                    await Promise.all(
                                      Array.from(cache.keys()).map(async key =>
                                        mutate(key)
                                      )
                                    );
                                    return response;
                                  }
                                  if (dataOp.invalidatedKeys) {
                                    await Promise.all(
                                      dataOp.invalidatedKeys.map(
                                        async invalidateKey =>
                                          Promise.all(
                                            Array.from(cache.keys()).map(
                                              async key => {
                                                if (
                                                  typeof key === "string" &&
                                                  key.includes(
                                                    `.$.${invalidateKey}.$.`
                                                  )
                                                ) {
                                                  return mutate(key);
                                                }
                                                return Promise.resolve();
                                              }
                                            )
                                          )
                                      )
                                    );
                                  }
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
                          typeof $steps["tutorialdbUpdateMany"] === "object" &&
                          typeof $steps["tutorialdbUpdateMany"].then ===
                            "function"
                        ) {
                          $steps["tutorialdbUpdateMany"] = await $steps[
                            "tutorialdbUpdateMany"
                          ];
                        }
                        $steps["goToDashboard"] = true
                          ? (() => {
                              const actionArgs = {};
                              return (({ destination }) => {
                                __nextRouter?.push(destination);
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          typeof $steps["goToDashboard"] === "object" &&
                          typeof $steps["goToDashboard"].then === "function"
                        ) {
                          $steps["goToDashboard"] = await $steps[
                            "goToDashboard"
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
          internalArgPropNames: PlasmicCandidate__ArgProps,
          internalVariantPropNames: PlasmicCandidate__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCandidate__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCandidate";
  } else {
    func.displayName = `PlasmicCandidate.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard(WrappedComponent) {
  const PageGuard = props => (
    <p.PlasmicPageGuard
      minRole={"3a39aa04-d095-4ea1-9803-57565a425707"}
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

export const PlasmicCandidate = Object.assign(
  // Top-level PlasmicCandidate renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCandidate
    internalVariantProps: PlasmicCandidate__VariantProps,
    internalArgProps: PlasmicCandidate__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCandidate;
/* prettier-ignore-end */