// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4WdhSVfyEYnextDzQgbzVw
// Component: dbO9kLlYIoHI
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import PageLayout from "../../PageLayout"; // plasmic-import: 790e77KXjH90/component
import { RichTable } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponent
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components"; // plasmic-import: k4RvFQUTZKCU/codeComponentHelper
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_applicant_tracking_system.module.css"; // plasmic-import: 4WdhSVfyEYnextDzQgbzVw/projectcss
import sty from "./PlasmicCandidates.module.css"; // plasmic-import: dbO9kLlYIoHI/css

createPlasmicElementProxy;

export const PlasmicCandidates__VariantProps = new Array();

export const PlasmicCandidates__ArgProps = new Array();

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCandidates__RenderFunc(props) {
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
  const new$Queries = {
    candidates: usePlasmicDataOp(() => {
      return {
        sourceId: "bVbbifmpQzHjtg5zdWgt8C",
        opId: "b6d3617d-e3c6-4c6c-a4f0-669dae8e48a0",
        userArgs: {},
        cacheKey: "plasmic.$..$..$.b6d3617d-e3c6-4c6c-a4f0-669dae8e48a0.$.",
        invalidatedKeys: null,
        roleId: "3a39aa04-d095-4ea1-9803-57565a425707"
      };
    }),
    positions: usePlasmicDataOp(() => {
      return {
        sourceId: "bVbbifmpQzHjtg5zdWgt8C",
        opId: "bd94684a-e1f9-4363-b01e-4f5265be031d",
        userArgs: {},
        cacheKey: "plasmic.$..$..$.bd94684a-e1f9-4363-b01e-4f5265be031d.$.",
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
                    {"Candidates"}
                  </h1>
                  {(() => {
                    const child$Props = {
                      canSelectRows: "click",
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
                            expr: null,
                            title: null
                          },
                          { key: "resume_url", fieldId: "resume_url" },
                          { key: "notes", fieldId: "notes" },
                          { key: "status", fieldId: "status" },
                          { key: "created_at", fieldId: "created_at" }
                        ];

                        __composite["0"]["isHidden"] = true;
                        __composite["4"]["expr"] = (
                          currentItem,
                          currentValue
                        ) => {
                          return $queries.positions.data.find(
                            p => p.id === currentValue
                          ).title;
                        };
                        __composite["4"]["title"] = "position";
                        return __composite;
                      })(),
                      onRowClick: async (rowKey, row, event) => {
                        const $steps = {};
                        $steps["goToCandidate"] = true
                          ? (() => {
                              const actionArgs = {
                                destination: `/candidate/${(() => {
                                  try {
                                    return row.id;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()}`
                              };
                              return (({ destination }) => {
                                __nextRouter?.push(destination);
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                        if (
                          typeof $steps["goToCandidate"] === "object" &&
                          typeof $steps["goToCandidate"].then === "function"
                        ) {
                          $steps["goToCandidate"] = await $steps[
                            "goToCandidate"
                          ];
                        }
                      },
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
  root: ["root", "pageLayout", "section", "h1", "table"],
  pageLayout: ["pageLayout", "section", "h1", "table"],
  section: ["section", "h1", "table"],
  h1: ["h1"],
  table: ["table"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCandidates__ArgProps,
          internalVariantPropNames: PlasmicCandidates__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCandidates__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCandidates";
  } else {
    func.displayName = `PlasmicCandidates.${nodeName}`;
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

export const PlasmicCandidates = Object.assign(
  // Top-level PlasmicCandidates renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    h1: makeNodeComponent("h1"),
    table: makeNodeComponent("table"),
    // Metadata about props expected for PlasmicCandidates
    internalVariantProps: PlasmicCandidates__VariantProps,
    internalArgProps: PlasmicCandidates__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicCandidates;
/* prettier-ignore-end */
