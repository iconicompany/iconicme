// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4WdhSVfyEYnextDzQgbzVw
// Component: ZFyWojTwSdL7
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
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton"; // plasmic-import: bx9Xzvf5_eu/codeComponent
import Card from "../../Card"; // plasmic-import: PTFjTPQ8SE6c/component
import { RichDetails } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: zV8WqibK3ZnC/codeComponent
import { RichTable } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponent
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponentHelper
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_applicant_tracking_system.module.css"; // plasmic-import: 4WdhSVfyEYnextDzQgbzVw/projectcss
import sty from "./PlasmicPosition.module.css"; // plasmic-import: ZFyWojTwSdL7/css

createPlasmicElementProxy;

export const PlasmicPosition__VariantProps = new Array();

export const PlasmicPosition__ArgProps = new Array();

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPosition__RenderFunc(props) {
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
        path: "table.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "table.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "table.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "table.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: p.generateOnMutateForSpec(
          "selectedRowKeys",
          RichTable_Helpers
        )
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
    position: usePlasmicDataOp(() => {
      return {
        sourceId: "bVbbifmpQzHjtg5zdWgt8C",
        opId: "4609158c-adfc-4c05-8439-8879139bc61b",
        userArgs: {
          filters: [$ctx.params.id]
        },
        cacheKey: "plasmic.$..$..$.4609158c-adfc-4c05-8439-8879139bc61b.$.",
        invalidatedKeys: null,
        roleId: "3a39aa04-d095-4ea1-9803-57565a425707"
      };
    }),
    candidates: usePlasmicDataOp(() => {
      return {
        sourceId: "bVbbifmpQzHjtg5zdWgt8C",
        opId: "322ed3b6-14b6-4326-8cc3-7dbe3042d8a7",
        userArgs: {
          filters: [$ctx.params.id]
        },
        cacheKey: "plasmic.$..$..$.322ed3b6-14b6-4326-8cc3-7dbe3042d8a7.$.",
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
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicPosition.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPosition.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPosition.pageMetadata.title}
        />
      </Head>

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
                  <div
                    data-plasmic-name={"freeBox"}
                    data-plasmic-override={overrides.freeBox}
                    className={classNames(projectcss.all, sty.freeBox)}
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
                            return $queries.position.data[0].title;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return "Position title";
                            }
                            throw e;
                          }
                        })()}
                      </React.Fragment>
                    </h1>
                    <AntdButton
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames("__wab_instance", sty.button)}
                      onClick={async () => {
                        const $steps = {};
                        $steps["tutorialdbUpdateMany"] = true
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "bVbbifmpQzHjtg5zdWgt8C",
                                  opId: "6b97c4dd-7f13-4fda-8b16-aa7573d529b3",
                                  userArgs: {
                                    conditions: [$ctx.params.id]
                                  },
                                  cacheKey:
                                    "plasmic.$..$..$.6b97c4dd-7f13-4fda-8b16-aa7573d529b3.$.",
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
                      }}
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
                        {"Archive"}
                      </div>
                    </AntdButton>
                  </div>
                  <Card
                    className={classNames("__wab_instance", sty.card__ay0Hd)}
                    noTitle={true}
                  >
                    <RichDetails
                      data-plasmic-name={"dataDetails"}
                      data-plasmic-override={overrides.dataDetails}
                      bordered={true}
                      className={classNames("__wab_instance", sty.dataDetails)}
                      column={1}
                      data={(() => {
                        try {
                          return $queries.position;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()}
                      fields={(() => {
                        const __composite = [
                          { key: "dept", fieldId: "dept" },
                          { key: "id", fieldId: "id", isHidden: null },
                          { key: "title", fieldId: "title", isHidden: null },
                          { key: "description", fieldId: "description" },
                          {
                            key: "department_id",
                            fieldId: "department_id",
                            isHidden: null
                          },
                          { key: "archived", fieldId: "archived" },
                          { key: "created_at", fieldId: "created_at" }
                        ];

                        __composite["1"]["isHidden"] = true;
                        __composite["2"]["isHidden"] = true;
                        __composite["4"]["isHidden"] = true;
                        return __composite;
                      })()}
                    />
                  </Card>
                  <Card
                    className={classNames("__wab_instance", sty.card__fLdnF)}
                    title={
                      <h4
                        data-plasmic-name={"h4"}
                        data-plasmic-override={overrides.h4}
                        className={classNames(
                          projectcss.all,
                          projectcss.h4,
                          projectcss.__wab_text,
                          sty.h4
                        )}
                      >
                        {"Candidates"}
                      </h4>
                    }
                  >
                    {(() => {
                      const child$Props = {
                        className: classNames("__wab_instance", sty.table),
                        data: (() => {
                          try {
                            return $queries.candidates;
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
                        fields: (() => {
                          const __composite = [
                            { key: "id", fieldId: "id", isHidden: null },
                            { key: "name", fieldId: "name" },
                            { key: "email", fieldId: "email" },
                            { key: "phone", fieldId: "phone" },
                            {
                              key: "position_id",
                              fieldId: "position_id",
                              isHidden: null
                            },
                            { key: "resume_url", fieldId: "resume_url" },
                            { key: "notes", fieldId: "notes" },
                            { key: "status", fieldId: "status" },
                            { key: "created_at", fieldId: "created_at" }
                          ];

                          __composite["0"]["isHidden"] = true;
                          __composite["4"]["isHidden"] = true;
                          return __composite;
                        })(),
                        onRowSelectionChanged: async (...eventArgs) => {
                          p.generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRowKey",
                            ["table", "selectedRowKey"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          p.generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRow",
                            ["table", "selectedRow"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          p.generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRows",
                            ["table", "selectedRows"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                          p.generateStateOnChangePropForCodeComponents(
                            $state,
                            "selectedRowKeys",
                            ["table", "selectedRowKeys"],
                            RichTable_Helpers
                          ).apply(null, eventArgs);
                        },
                        scopeClassName: sty["table__instance"],
                        selectedRowKey: p.generateStateValueProp($state, [
                          "table",
                          "selectedRowKey"
                        ]),
                        selectedRowKeys: p.generateStateValueProp($state, [
                          "table",
                          "selectedRowKeys"
                        ]),
                        themeResetClassName: classNames(
                          projectcss.root_reset,
                          projectcss.root_reset_tags,
                          projectcss.plasmic_default_styles,
                          projectcss.plasmic_mixins,
                          projectcss.plasmic_tokens,
                          plasmic_antd_5_hostless_css.plasmic_tokens
                        )
                      };
                      p.initializeCodeComponentStates(
                        $state,
                        [
                          {
                            name: "selectedRowKey",
                            plasmicStateName: "table.selectedRowKey"
                          },
                          {
                            name: "selectedRow",
                            plasmicStateName: "table.selectedRow"
                          },
                          {
                            name: "selectedRows",
                            plasmicStateName: "table.selectedRows"
                          },
                          {
                            name: "selectedRowKeys",
                            plasmicStateName: "table.selectedRowKeys"
                          }
                        ],

                        [],
                        RichTable_Helpers ?? {},
                        child$Props
                      );
                      return (
                        <RichTable
                          data-plasmic-name={"table"}
                          data-plasmic-override={overrides.table}
                          {...child$Props}
                        />
                      );
                    })()}
                  </Card>
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
  root: [
    "root",
    "pageLayout",
    "section",
    "freeBox",
    "h1",
    "button",
    "text",
    "dataDetails",
    "h4",
    "table"
  ],

  pageLayout: [
    "pageLayout",
    "section",
    "freeBox",
    "h1",
    "button",
    "text",
    "dataDetails",
    "h4",
    "table"
  ],

  section: [
    "section",
    "freeBox",
    "h1",
    "button",
    "text",
    "dataDetails",
    "h4",
    "table"
  ],

  freeBox: ["freeBox", "h1", "button", "text"],
  h1: ["h1"],
  button: ["button", "text"],
  text: ["text"],
  dataDetails: ["dataDetails"],
  h4: ["h4"],
  table: ["table"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPosition__ArgProps,
          internalVariantPropNames: PlasmicPosition__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPosition__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPosition";
  } else {
    func.displayName = `PlasmicPosition.${nodeName}`;
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

export const PlasmicPosition = Object.assign(
  // Top-level PlasmicPosition renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    freeBox: makeNodeComponent("freeBox"),
    h1: makeNodeComponent("h1"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),
    dataDetails: makeNodeComponent("dataDetails"),
    h4: makeNodeComponent("h4"),
    table: makeNodeComponent("table"),
    // Metadata about props expected for PlasmicPosition
    internalVariantProps: PlasmicPosition__VariantProps,
    internalArgProps: PlasmicPosition__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "Position",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPosition;
/* prettier-ignore-end */
