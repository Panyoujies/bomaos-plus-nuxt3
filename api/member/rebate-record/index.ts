import type {RebateRecord, RebateRecordParam} from "./model";
import request from "~/composables/request";
import type {PageResult} from "~/api";


/**
 * 分页查询订单
 */
export async function pageRebateRecords(params: RebateRecordParam) {
    const res = await request.get<PageResult<RebateRecord>>('/member/rebate-record/page', { ...params }, {server: false});
    if (res.code === 0 && res.data) {
        return res.data;
    }
    return Promise.reject(new Error(res.message));
}